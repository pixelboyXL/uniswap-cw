import { uniswapMarketBtnCreateStake,
    uniswapBackdropWarning,
    uniswapMessageWarning,
    uniswapMessageBtnWarning,
    uniswapBackdropErrorValidate,
    uniswapMessageErrorValidate,
    uniswapMessageBtnErrorValidate,
    uniswapBackdropErrorCreate,
    uniswapMessageErrorCreate,
    uniswapMessageBtnErrorCreate,
    uniswapBackdropSuccess,
    uniswapMessageSuccess,
    uniswapMessageBtnSuccess,
    linkToMarket,
    linkToStake,
    linkToMyPositions,
    marketTokensGrid,
    marketStakeForm,
    stakeFormSelectPair,
    stakeFormPairWrap,
    stakeFormPairText,
    stakeFormAmount,
    stakeFormLockPeriod,
    stakeFormLockPeriodWrap,
    stakeFormLockPeriodText,
    marketMyPositions,
    marketSection,
    marketTokensListItemWarning,
    marketTokensListItemMobWarning,
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
import { toggleUniswapMessage } from './authorization';

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

function getStakeFormValue (objectOptionsText, elemToOverrite) {
    objectOptionsText.forEach(objectText => {
        objectText.addEventListener("click", () => {
            const neddedValue = objectText.innerHTML;
            elemToOverrite.value = neddedValue;
        });
    });
};

if (stakeFormSelectPair) {
    stakeFormSelectPair.addEventListener("click", () => {
        toggleIsHidden(stakeFormPairWrap);
        getStakeFormValue(stakeFormPairText, stakeFormSelectPair);
    });
};

if (stakeFormLockPeriod) {
    stakeFormLockPeriod.addEventListener("click", () => {
        toggleIsHidden(stakeFormLockPeriodWrap);
        getStakeFormValue(stakeFormLockPeriodText, stakeFormLockPeriod);
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

const warningVisible = "uniswap-message__warning-visible";
const errorValidateVisible = "uniswap-message__error-validate-visible";
const errorCreateVisible = "uniswap-message__error-create-visible";
const successVisible = "uniswap-message__success-visible";

if (marketTokensListItemWarning) {
    marketTokensListItemWarning.forEach(itemWarning => {
        itemWarning.addEventListener("click", () => {
            toggleUniswapMessage(uniswapBackdropWarning, uniswapMessageWarning, warningVisible);
        });
    });
};

if (marketTokensListItemMobWarning) {
    marketTokensListItemMobWarning.forEach(itemMobWarning => {
        itemMobWarning.addEventListener("click", () => {
            toggleUniswapMessage(uniswapBackdropWarning, uniswapMessageWarning, warningVisible);
        });
    });
};

if (uniswapMessageBtnWarning) {
    uniswapMessageBtnWarning.addEventListener("click", () => { 
        toggleUniswapMessage(uniswapBackdropWarning, uniswapMessageWarning, warningVisible);
    });
};

if (uniswapMarketBtnCreateStake) {
    uniswapMarketBtnCreateStake.addEventListener("click", () => {
        if (stakeFormSelectPair.value === "") {
            toggleUniswapMessage(uniswapBackdropErrorValidate, uniswapMessageErrorValidate, errorValidateVisible);
            return;
        } else if (stakeFormLockPeriod.value === "" || stakeFormAmount.value === "") {
            toggleUniswapMessage(uniswapBackdropErrorCreate, uniswapMessageErrorCreate, errorCreateVisible);
            return;
        } else {
            toggleUniswapMessage(uniswapBackdropSuccess, uniswapMessageSuccess, successVisible);
        };
    });
};

if (uniswapMessageBtnErrorValidate) {
    uniswapMessageBtnErrorValidate.addEventListener("click", () => {
        toggleUniswapMessage(uniswapBackdropErrorValidate, uniswapMessageErrorValidate, errorValidateVisible);
    });
};

if (uniswapMessageBtnErrorCreate) {
    uniswapMessageBtnErrorCreate.addEventListener("click", () => {
        toggleUniswapMessage(uniswapBackdropErrorCreate, uniswapMessageErrorCreate, errorCreateVisible);
    });
};

if (uniswapMessageBtnSuccess) {
    uniswapMessageBtnSuccess.addEventListener("click", () => {
        toggleUniswapMessage(uniswapBackdropSuccess, uniswapMessageSuccess, successVisible);
        marketStakeForm.reset();
    });
};