import { authorizationButton } from './refs';

const activeClass = 'authorization-box__btn_scale';
const visuallyHidden = "visually_hidden";
const isHidden = "is_hidden";

if (authorizationButton) {
    authorizationButton.addEventListener('click', () => {
        authorizationButton.classList.toggle(activeClass);
    });
};

export function toggleVisuallyHidden (elemShow, elemHide) {
    elemShow.classList.toggle(visuallyHidden);
    elemHide.classList.toggle(visuallyHidden);
};

export function toggleIsHidden (elem) {
    elem.classList.toggle(isHidden);
};