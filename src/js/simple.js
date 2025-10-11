const visuallyHidden = "visually_hidden";
const isHidden = "is_hidden";

export function toggleVisuallyHidden (elemShow, elemHide) {
    elemShow.classList.toggle(visuallyHidden);
    elemHide.classList.toggle(visuallyHidden);
};

export function toggleIsHidden (elem) {
    elem.classList.toggle(isHidden);
};

export function addVisuallyHidden (elem) {
    elem.classList.add(visuallyHidden);
};

export function removeVisuallyHidden (elem) {
    elem.classList.remove(visuallyHidden);
};