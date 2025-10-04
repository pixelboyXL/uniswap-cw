import { authorizationBox,
    authorizationRegisterBox,
    authorizationTextPink,
    authorizationRegisterTextPink } from './refs';
import { toggleVisuallyHidden } from './simple';

if (authorizationTextPink) {
    authorizationTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationBox, authorizationRegisterBox);
    });
};

if (authorizationRegisterTextPink) {
    authorizationRegisterTextPink.addEventListener("click", () => {
        toggleVisuallyHidden(authorizationRegisterBox, authorizationBox);
    });
};