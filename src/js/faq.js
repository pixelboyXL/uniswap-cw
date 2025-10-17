import { faqItem, faqArrow } from "./refs";
import { toggleCustomClass } from "./simple";

const faqItemOpen = "item-open";
const faqArrowUp = "arrow-up";

if (faqArrow) {
    faqArrow.addEventListener("click", () => {
        toggleCustomClass(faqArrow, faqArrowUp);
        toggleCustomClass(faqItem, faqItemOpen);
    });
};