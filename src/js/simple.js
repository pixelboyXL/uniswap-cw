const visuallyHidden = "visually_hidden";
const isHidden = "is_hidden";
const displayBlock = "block";
const displayNone = "none";
const currentClass = "current";

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

export function showSection (elem) {
    elem.style.display = displayBlock;
};

export function hideSection (elem) {
    elem.style.display = displayNone;
};

export function addCurrentClass (elem) {
    elem.classList.add(currentClass);
}

export function removeCurrentClass (elem) {
    elem.classList.remove(currentClass);
}

export function getViewWidth () {
    return window.innerWidth;
};