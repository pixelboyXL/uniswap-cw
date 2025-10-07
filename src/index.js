import "./js/refs";
import "./js/simple";
import "./js/authorization";
import "./js/validation";
import "./js/market";

import iconsUrl from './images/icons.svg';

console.log(iconsUrl);

document.querySelectorAll('use').forEach((use) => {
    const href = use.getAttribute('href');
    if (href.startsWith('./images/icons.svg')) {
        const id = href.split('#')[1];
        use.setAttribute('href', `${iconsUrl}#${id}`);
    }
});