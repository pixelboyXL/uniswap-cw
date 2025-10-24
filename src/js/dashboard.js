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
    dashboardTokensGrid,
    dashboardStakeForm,
    stakeFormSelectPair,
    stakeFormPairWrap,
    stakeFormPairText,
    stakeFormAmount,
    stakeFormLockPeriod,
    stakeFormLockPeriodWrap,
    stakeFormLockPeriodText,
    dashboardMyPositions,
    dashboardSection,
    TokensListItemWarning,
    TokensListItemMobWarning,
    dashboardLink,
    uniswapMarketExmark,
    uniswapMarketInfoWrap,
    linkToMarket,
    linkToStake,
    linkToMyPositions,
    dashboardTokensGrid,
    dashboardStakeForm,
    dashboardMyPositions,
    whitePaperMobLink,
    whitePaperSection,
    whitePaperLink,
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
import { showMainSections, hideMainSections, hidePersonalSections } from './switching';
import { toggleUniswapMessage } from './authorization';

export function showDashboardPiece (pieceToShow = dashboardTokensGrid, linkToCurrent = linkToMarket) {
    hideDashboardPiece();

    addLinkActive(dashboardLink);
    showSection(dashboardSection);
    addCurrentClass(linkToCurrent);
    showSection(pieceToShow);
};

export function hideDashboardPiece () {
    removeLinkActive(dashboardLink);
    hideSection(dashboardSection);
    removeCurrentClass(linkToMarket);
    hideSection(dashboardTokensGrid);
    removeCurrentClass(linkToStake);
    hideSection(dashboardStakeForm);
    dashboardStakeForm.reset();
    removeCurrentClass(linkToMyPositions);
    hideSection(dashboardMyPositions);
};

if (linkToMarket) {
    linkToMarket.addEventListener("click", () => {
        showDashboardPiece();
    });
};

if (linkToStake) {
    linkToStake.addEventListener("click", () => {
        showDashboardPiece(dashboardStakeForm, linkToStake);
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
        showDashboardPiece(dashboardMyPositions, linkToMyPositions);
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
        showMainSections(whitePaperSection, whitePaperLink);
        hideDashboardPiece();
        hidePersonalSections();
    });
};

if (stakeMobLink) {
    stakeMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showDashboardPiece(dashboardStakeForm, linkToStake);
        hideMainSections();
        hidePersonalSections();
    });
};

if (myPositionsMobLink) {
    myPositionsMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showDashboardPiece(dashboardMyPositions, linkToMyPositions);
        hideMainSections();
        hidePersonalSections();
    });
};

const warningVisible = "uniswap-message-warning-visible";
const errorValidateVisible = "uniswap-message-error-validate-visible";
const errorCreateVisible = "uniswap-message-error-create-visible";
const successVisible = "uniswap-message-success-visible";

if (TokensListItemWarning) {
    TokensListItemWarning.forEach(itemWarning => {
        itemWarning.addEventListener("click", () => {
            toggleUniswapMessage(uniswapBackdropWarning, uniswapMessageWarning, warningVisible);
        });
    });
};

if (TokensListItemMobWarning) {
    TokensListItemMobWarning.forEach(itemMobWarning => {
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
        dashboardStakeForm.reset();
    });
};