import { marketTokensList,
    marketTokensListMob,
    marketTokensGrid,
    marketTokensGridMob, } from './refs';
import { addVisuallyHidden, removeVisuallyHidden } from './simple';

const deskWidth = 1439;
const browserWidth = window.innerWidth;

if (browserWidth <= deskWidth) {
    addVisuallyHidden(marketTokensList);
    removeVisuallyHidden(marketTokensListMob);
    addVisuallyHidden(marketTokensGrid);
    removeVisuallyHidden(marketTokensGridMob);
} else {
    addVisuallyHidden(marketTokensListMob);
    removeVisuallyHidden(marketTokensList);
    addVisuallyHidden(marketTokensGridMob);
    removeVisuallyHidden(marketTokensGrid);
};