import { header, 
    headerMob,
    marketTokensList,
    marketTokensListMob,
    marketTokensGrid,
    marketTokensGridMob, } from './refs';
import { addVisuallyHidden, removeVisuallyHidden } from './simple';

const deskWidth = 1439;
const browserWidth = window.innerWidth;

if (browserWidth <= deskWidth) {
    addVisuallyHidden(header);
    removeVisuallyHidden(headerMob);
    addVisuallyHidden(marketTokensList);
    removeVisuallyHidden(marketTokensListMob);
    addVisuallyHidden(marketTokensGrid);
    removeVisuallyHidden(marketTokensGridMob);
} else {
    addVisuallyHidden(headerMob);
    removeVisuallyHidden(header);
    addVisuallyHidden(marketTokensListMob);
    removeVisuallyHidden(marketTokensList);
    addVisuallyHidden(marketTokensGridMob);
    removeVisuallyHidden(marketTokensGrid);
};