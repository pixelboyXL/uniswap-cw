import { linkToMarket,
    linkToStake,
    linkToMyPositions,
    marketTokensGrid,
    marketStakeForm,
    stakeFormSelectPair,
    stakeFormPairWrap,
    stakeFormLockPeriod,
    stakeFormLpWrap,
    marketMyPositions,
    marketSection,
    dashboardLink,
    uniswapMarketExmark,
    uniswapMarketInfoWrap,
    linkToMarket,
    linkToStake,
    linkToMyPositions,
    marketTokensGrid,
    marketStakeForm,
    marketMyPositions,
    whitePaperMobLink,
    stakeMobLink,
    myPositionsMobLink,
    headerMobMenu,
    mobMenuBackdrop,
    mobMenu, } from './refs';
import { toggleIsHidden, 
    showSection, 
    hideSection, 
    toggleCustomClass,
    addCurrentClass, 
    removeCurrentClass,
    addLinkActive,
    removeLinkActive } from './simple';
import { hideMainSections, hidePersonalSections } from './switching';

export function showDashboardPiece (pieceToShow = marketTokensGrid, linkToCurrent = linkToMarket) {
    hideDashboardPiece();

    addLinkActive(dashboardLink);
    showSection(marketSection);
    addCurrentClass(linkToCurrent);
    showSection(pieceToShow);
};

export function hideDashboardPiece () {
    removeLinkActive(dashboardLink);
    hideSection(marketSection);
    removeCurrentClass(linkToMarket);
    hideSection(marketTokensGrid);
    removeCurrentClass(linkToStake);
    hideSection(marketStakeForm);
    removeCurrentClass(linkToMyPositions);
    hideSection(marketMyPositions);
};

if (linkToMarket) {
    linkToMarket.addEventListener("click", () => {
        showDashboardPiece();
    });
};

if (linkToStake) {
    linkToStake.addEventListener("click", () => {
        showDashboardPiece(marketStakeForm, linkToStake);
    });
};

if (stakeFormSelectPair) {
    stakeFormSelectPair.addEventListener("click", () => {
        toggleIsHidden(stakeFormPairWrap);
    });
};

if (stakeFormLockPeriod) {
    stakeFormLockPeriod.addEventListener("click", () => {
        toggleIsHidden(stakeFormLpWrap);
    });
};

if (linkToMyPositions) {
    linkToMyPositions.addEventListener("click", () => {
        showDashboardPiece(marketMyPositions, linkToMyPositions);
    });
};

if (uniswapMarketExmark) {
    uniswapMarketExmark.addEventListener ("click", () => {
        toggleIsHidden(uniswapMarketInfoWrap);
        setTimeout(() => {
            toggleIsHidden(uniswapMarketInfoWrap);
        }, 5000);
    });
};

function toggleMobMenu () {
    const mobMenuVisible = "mob-menu-visible";
    toggleIsHidden(mobMenuBackdrop);
    toggleCustomClass(mobMenu, mobMenuVisible);
};

if (headerMobMenu) {
    headerMobMenu.addEventListener("click", toggleMobMenu);
};

if (whitePaperMobLink) {
    whitePaperMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showDashboardPiece(marketTokensGrid, linkToMarket);
        hideMainSections();
        hidePersonalSections();
    });
};

if (stakeMobLink) {
    stakeMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showDashboardPiece(marketStakeForm, linkToStake);
        hideMainSections();
        hidePersonalSections();
    });
};

if (myPositionsMobLink) {
    myPositionsMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showDashboardPiece(marketMyPositions, linkToMyPositions);
        hideMainSections();
        hidePersonalSections();
    });
};