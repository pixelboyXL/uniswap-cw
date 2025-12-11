// Get transaction ID from URL
const pathParts = window.location.pathname.split('/');
const transactionId = pathParts[pathParts.length - 1];
let depositData = null;
let timerInterval = null;
let expiryTime = null;
// Load deposit request data
async function loadDepositData() {
    try {
        const response = await fetch(`/api/deposit/request/${transactionId}`, {
            credentials: 'include'
        });
        if (response.ok) {
            depositData = await response.json();
            updateDisplay();
            // Set up expiry timer if not already set
            if (!expiryTime && depositData.created_at) {
                // Calculate expiry time (30 minutes from creation)
                const createdAt = new Date(depositData.created_at);
                expiryTime = new Date(createdAt.getTime() + 30 * 60 * 1000);
                startTimer();
            }
        } else {
            alert('Failed to load deposit request');
            window.location.href = '/dashboard';
        }
    } catch (error) {
        console.error('Error loading deposit data:', error);
        alert('Failed to load deposit request');
        window.location.href = '/dashboard';
    }
}
// Update display with deposit data
function updateDisplay() {
    if (!depositData) return;
    document.getElementById('depositAmount').textContent = `$${depositData.amount.toFixed(2)}`;
    document.getElementById('stepAmount').textContent = `$${depositData.amount.toFixed(2)}`;
    document.getElementById('networkName').textContent = depositData.network;
    document.getElementById('depositAddress').textContent = depositData.address;
    document.getElementById('warningNetwork').textContent = depositData.network;
    document.getElementById('transactionId').textContent = transactionId;
    // Load QR code image
    const qrImage = document.getElementById('qrImage');
    const qrPlaceholder = document.getElementById('qrPlaceholder');
    // Set QR code image path
    const qrPath = `/static/qr_codes/${depositData.address}.png`;
    qrImage.src = qrPath;
    qrImage.onload = function() {
        qrImage.style.display = 'block';
        qrPlaceholder.style.display = 'none';
    };
    qrImage.onerror = function() {
        qrImage.style.display = 'none';
        qrPlaceholder.style.display = 'block';
        qrPlaceholder.textContent = 'QR Code not available';
    };
    // Update status based on transaction status
    const statusText = document.getElementById('statusText');
    const statusDot = document.querySelector('.status-dot');
    switch(depositData.status) {
        case 'deposit_request_created':
            statusText.textContent = 'Waiting for Deposit';
            statusDot.style.background = '#f59e0b';
            break;
        case 'deposit_approved_by_user':
            statusText.textContent = 'Processing';
            statusDot.style.background = '#38bdf8';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('confirmBtn').textContent = 'Processing...';
            document.getElementById('cancelBtn').disabled = true;
            if (timerInterval) clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Waiting for confirmation';
            break;
        case 'deposit_completed':
            statusText.textContent = 'Completed';
            statusDot.style.background = '#10b981';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('confirmBtn').textContent = 'Completed';
            document.getElementById('cancelBtn').disabled = true;
            if (timerInterval) clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Completed';
            break;
        case 'deposit_request_declined_by_user':
            statusText.textContent = 'Cancelled by user';
            statusDot.style.background = '#ef4444';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('cancelBtn').disabled = true;
            if (timerInterval) clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Cancelled by user';
            break;
        case 'deposit_declined_by_system':
            statusText.textContent = 'Declined by system';
            statusDot.style.background = '#ef4444';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('cancelBtn').disabled = true;
            if (timerInterval) clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Declined by system';
            break;
        case 'deposit_request_expired':
            statusText.textContent = 'Expired';
            statusDot.style.background = '#ef4444';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('cancelBtn').disabled = true;
            if (timerInterval) clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Expired';
            break;
    }
}
// Copy address to clipboard
function copyAddress() {
    const addressText = document.getElementById('depositAddress').textContent;
    const copyBtn = document.getElementById('copyAddressBtn');
    navigator.clipboard.writeText(addressText).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.textContent = 'Copy Address';
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy address');
    });
}
// Start countdown timer
function startTimer() {
    if (!expiryTime) return;
    timerInterval = setInterval(() => {
        const now = new Date();
        const timeRemaining = Math.max(0, expiryTime - now);
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            document.getElementById('expiryTimer').textContent = 'Expired';
            document.getElementById('confirmBtn').disabled = true;
            document.getElementById('statusText').textContent = 'Expired';
            document.querySelector('.status-dot').style.background = '#ef4444';
            // Call API to decline by expiration
            declineByExpiration();
            return;
        }
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = Math.floor((timeRemaining % 60000) / 1000);
        document.getElementById('expiryTimer').textContent =
            `Expires in ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}
// Auto-decline when expired
async function declineByExpiration() {
    try {
        await fetch(`/api/deposit/expired/${transactionId}`, {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error('Failed to auto-decline:', error);
    }
}
function openModal(action) {
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const text = document.getElementById('modalText');
    document.getElementById('modalActions').style.display = 'flex';
    document.getElementById('modalOkOnly').style.display = 'none';
    currentAction = action;
    if (action === 'confirm') {
        title.textContent = 'Confirm Deposit';
        text.textContent = 'Please confirm that you have sent the deposit. This action cannot be undone.';
    } else if (action === 'cancel') {
        title.textContent = 'Cancel Deposit Request';
        text.textContent = 'Are you sure you want to cancel this deposit request?';
    }
    overlay.style.display = 'flex';
}
function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
    currentAction = null;
}
// Open a message-only modal (for alerts or results)
function showModalMessage(title, text, callback = null) {
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;
    // Hide confirm/cancel buttons, show OK button
    document.getElementById('modalActions').style.display = 'none';
    document.getElementById('modalOkOnly').style.display = 'flex';
    overlay.style.display = 'flex';
    const okBtn = document.getElementById('modalOkBtn');
    // Remove previous handlers to avoid stacking
    const newOkBtn = okBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    newOkBtn.addEventListener('click', () => {
        closeModal();
        if (callback) callback();
    });
}
document.getElementById('modalCancelBtn').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') closeModal(); // Click outside to close
});
document.getElementById('modalConfirmBtn').addEventListener('click', async () => {
    if (currentAction === 'confirm') {
        await performConfirmDeposit();
    } else if (currentAction === 'cancel') {
        await performCancelDeposit();
    }
});
async function performConfirmDeposit() {
    const btn = document.getElementById('confirmBtn');
    btn.disabled = true;
    btn.textContent = 'Confirming...';
    try {
        const response = await fetch(`/api/deposit/approve/${transactionId}`, {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            closeModal();
            showModalMessage(
                'Deposit Confirmed',
                'Your deposit has been confirmed. Your balance will update once verified on the blockchain.',
                () => loadDepositData()
            );
        } else {
            const error = await response.json();
            closeModal();
            showModalMessage('Error', `Error: ${error.detail}`);
        }
    } catch (error) {
        closeModal();
        showModalMessage('Network Error', 'Failed to confirm deposit. Please try again.');
    } finally {
        btn.disabled = false;
        btn.textContent = "I've Sent the Deposit";
    }
}
async function performCancelDeposit() {
    const btn = document.getElementById('cancelBtn');
    btn.disabled = true;
    btn.textContent = 'Cancelling...';
    try {
        const response = await fetch(`/api/deposit/decline/${transactionId}`, {
            method: 'POST',
            credentials: 'include'
        });
        if (response.ok) {
            closeModal();
            showModalMessage(
                'Deposit Cancelled',
                'Your deposit request has been cancelled',
                () => loadDepositData()
            );
        } else {
            const error = await response.json();
            closeModal();
            showModalMessage('Error', `Error: ${error.detail}`);
        }
    } catch (error) {
        closeModal();
        showModalMessage('Network Error', 'Failed to cancel deposit. Please try again.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Cancel Request';
    }
}
document.getElementById('confirmBtn').onclick = () => openModal('confirm');
document.getElementById('cancelBtn').onclick = () => openModal('cancel');
// Check status periodically
function checkStatus() {
    loadDepositData();
}
// Initialize
window.addEventListener('load', () => {
    // loadDepositData();
    // Check status every 30 seconds
    // setInterval(checkStatus, 30000);
});
// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
});