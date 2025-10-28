import { progressLvlIconFirst,
    hintFirst,
    progressLvlIconSecond,
    hintSecond, } from './refs';
import { toggleIsHidden } from './simple';

if (progressLvlIconFirst) {
    progressLvlIconFirst.addEventListener ("click", () => {
        toggleIsHidden(hintFirst);
        setTimeout(() => {
            toggleIsHidden(hintFirst);
        }, 5000);
    });
};

if (progressLvlIconSecond) {
    progressLvlIconSecond.addEventListener ("click", () => {
        toggleIsHidden(hintSecond);
        setTimeout(() => {
            toggleIsHidden(hintSecond);
        }, 5000);
    });
};