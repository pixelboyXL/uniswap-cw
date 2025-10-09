import { authorizationContainer,
    authorizationBox,
    authorizationRegisterBox,
    uniswapMessageTextWrap,
    authorizationLogInForm,
    authorizationLogInEmailInput,
    authorizationLogInPasswordInput,
    authorizationButton,
    authorizationTextPink,
    authorizationRegisterTextPink } from './refs';
import { toggleVisuallyHidden } from './simple';

if (authorizationTextPink) {
    authorizationTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationBox, authorizationRegisterBox);
        uniswapMessageTextWrap.style.display = "none";
        authorizationLogInForm.reset();
        resetAuthPadding();
        resetAuthMargin();
    });
};

if (authorizationRegisterTextPink) {
    authorizationRegisterTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationRegisterBox, authorizationBox);
    });
};

function getAuthPadding () {
    const authContainerStyles = window.getComputedStyle(authorizationContainer);
    return authContainerStyles.getPropertyValue('padding-top');
};

function changeAuthPadding () {
    const authContainerPaddingTop = getAuthPadding();
    if (authContainerPaddingTop === "132px") {
        authorizationContainer.style.paddingTop = "100px";
        return;
    };
};

function resetAuthPadding() {
    const authContainerPaddingTop = getAuthPadding();
    if (authContainerPaddingTop === "100px") {
        authorizationContainer.style.paddingTop = "132px";
        return;
    };
};

function getAuthMargin () {    
    const authBoxStyles = window.getComputedStyle(authorizationBox);
    return authBoxStyles.getPropertyValue('margin-top');
};

function changeAuthMargin () {    
    const authBoxMarginTop = getAuthMargin();
    if (authBoxMarginTop === "52px") {
        authorizationBox.style.marginTop = "20px";
        return;
    };
};

function resetAuthMargin() {
    const authBoxMarginTop = getAuthMargin();
    if (authBoxMarginTop === "20px") {
        authorizationBox.style.marginTop = "52px";
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
            changeAuthMargin();
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else if (!email.match(emailPattern)) {
            changeAuthPadding();
            changeAuthMargin();
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else {
            resetAuthPadding();
            resetAuthMargin();
            uniswapMessageTextWrap.style.display = "none";
        };
    });
};