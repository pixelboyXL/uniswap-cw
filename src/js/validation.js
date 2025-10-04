import { authorizationButton, 
    uniswapMessageTextWrap, 
    authorizationLogInForm,
    authorizationLogInEmailInput, 
    authorizationLogInPasswordInput,
    authorizationTextPink } from './refs';

if (authorizationButton) {
    authorizationButton.addEventListener("click", () => {
        const email = authorizationLogInEmailInput.value.trim();
        const password = authorizationLogInPasswordInput.value.trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email || !password) {
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else if (!email.match(emailPattern)) {
            uniswapMessageTextWrap.style.display = "block";
            return;
        } else {
            uniswapMessageTextWrap.style.display = "none";
        }
    });
};

if (authorizationTextPink) {
    authorizationTextPink.addEventListener("click", () => {
        uniswapMessageTextWrap.style.display = "none";
        authorizationLogInForm.reset();
    });
};