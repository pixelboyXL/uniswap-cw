import { authorizationSection,
    authorizationBoxWrap,
    authorizationBoxRegisterWrap,
    uniswapMessageTextWrap,
    authorizationLogInForm,
    authorizationLogInEmailInput,
    authorizationLogInPasswordInput,
    authorizationButton,
    authorizationTextPink,
    authorizationRegisterTextPink, 
    headerSection,
    navUserSections,
    footerSection,
    logoutLink,
    uniswapBackdrop,
    uniswapMessageLogout,
    uniswapMessageBtnLogout,
    uniswapMessageBtnNoLogout, } from './refs';
import { toggleVisuallyHidden, 
    toggleIsHidden, 
    showSection, 
    hideSection, 
    toggleCustomClass } from './simple';
import { showDashboardPiece, hideDashboardPiece } from './market';
import { hideMainSections, hidePersonalSections } from './switching';

if (authorizationTextPink) {
    authorizationTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationBoxWrap, authorizationBoxRegisterWrap);
        uniswapMessageTextWrap.style.display = "none";
        authorizationLogInForm.reset();
        resetAuthPadding();
    });
};

if (authorizationRegisterTextPink) {
    authorizationRegisterTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationBoxRegisterWrap, authorizationBoxWrap);
    });
};

function getAuthPadding () {    
    const authBoxStyles = window.getComputedStyle(authorizationBoxWrap);
    return authBoxStyles.getPropertyValue('padding-top');
};

function changeAuthPadding () {    
    const authBoxPaddingTop = getAuthPadding();
    if (authBoxPaddingTop === "132px") {
        authorizationBoxWrap.style.paddingTop = "100px";
        return;
    };
    if (authBoxPaddingTop === "68px") {
        authorizationBoxWrap.style.paddingTop = "36px";
        return;
    };
};

function resetAuthPadding() {
    const authBoxPaddingTop = getAuthPadding();
    if (authBoxPaddingTop === "36px") {
        authorizationBoxWrap.style.paddingTop = "68px";
        return;
    };
    if (authBoxPaddingTop === "100px") {
        authorizationBoxWrap.style.paddingTop = "132px";
        return;
    };
};

if (authorizationButton) {
    authorizationButton.addEventListener("click", () => {
        const email = authorizationLogInEmailInput.value.trim();
        const password = authorizationLogInPasswordInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email || !password) {  
            changeAuthPadding();
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else if (!email.match(emailPattern)) {
            changeAuthPadding();
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else {
            resetAuthPadding();
            authorizationLogInForm.reset();
            uniswapMessageTextWrap.style.display = "none";
            hideSection(authorizationSection);
            showSection(headerSection);
            showSection(footerSection);
            showDashboardPiece();
        };
    });
};

export function toggleUniswapMessage (uniswapMessage, uniswapMessageVisible) {
    toggleIsHidden(uniswapBackdrop);
    toggleCustomClass(uniswapMessage, uniswapMessageVisible);
};

const logoutVisible = "uniswap-message__logout-visible";

if (logoutLink) {
    logoutLink.addEventListener("click", () => {
        toggleIsHidden(navUserSections);
        toggleUniswapMessage(uniswapMessageLogout, logoutVisible);
    });
};

if (uniswapMessageBtnLogout) {
    uniswapMessageBtnLogout.addEventListener("click", () => { 
        toggleUniswapMessage(uniswapMessageLogout, logoutVisible);
        hideDashboardPiece();
        hideMainSections();
        hidePersonalSections();
        hideSection(headerSection);
        hideSection(footerSection);
        showSection(authorizationSection);
    });
};

if (uniswapMessageBtnNoLogout) {
    uniswapMessageBtnNoLogout.addEventListener("click", () => { 
        toggleUniswapMessage(uniswapMessageLogout, logoutVisible);
    });
};