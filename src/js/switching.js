import { authorizationSection,
    linkToMarket,
    linkToStake,
    linkToMyPositions,
    marketTokensGrid,
    marketTokensGridMob,
    marketStakeForm,
    stakeFormSelectPair,
    stakeFormPairWrap,
    stakeFormLockPeriod,
    stakeFormLpWrap,
    marketMyPositions,
    navUserIcon,
    headerSection,
    headerMobSection,
    marketSection,
    userProfileSection,
    referralProgramSection,
    dashboardSection,
    roadmapSection,
    footerSection,
    dashboard,
    whitePaper,
    roadmap,
    deposit,
    withdraw,  } from './refs';
import { toggleIsHidden, showSection, hideSection, addCurrentClass, removeCurrentClass, getViewWidth } from './simple';

if (linkToMarket) {
    linkToMarket.addEventListener("click", () => {
        const viewWidth = getViewWidth();
        if (viewWidth <= 1439) {
            showSection(marketTokensGridMob);
            hideSection(marketTokensGrid);
        } else {
            showSection(marketTokensGrid);
            hideSection(marketTokensGridMob);
        };
        addCurrentClass(linkToMarket);
        hideSection(marketStakeForm);
        removeCurrentClass(linkToStake);
        hideSection(marketMyPositions);
        removeCurrentClass(linkToMyPositions);
    });
};

if (linkToStake) {
    linkToStake.addEventListener("click", () => {
        showSection(marketStakeForm);
        addCurrentClass(linkToStake);
        hideSection(marketTokensGrid);
        hideSection(marketTokensGridMob);
        removeCurrentClass(linkToMarket);
        hideSection(marketMyPositions);
        removeCurrentClass(linkToMyPositions);
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
        showSection(marketMyPositions);
        addCurrentClass(linkToMyPositions);
        hideSection(marketTokensGrid);
        hideSection(marketTokensGridMob);
        removeCurrentClass(linkToMarket);
        hideSection(marketStakeForm);
        removeCurrentClass(linkToStake);
    });
};

if (navUserIcon) {
    navUserIcon.addEventListener("click", () => {
        showSection(authorizationSection);
        hideSection(headerSection);
        hideSection(headerMobSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
        hideSection(footerSection);
    });
};

if (dashboard) {
    dashboard.addEventListener("click", () => {
        showSection(dashboardSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (whitePaper) {
    whitePaper.addEventListener("click", () => {
        showSection(marketSection);
        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (roadmap) {
    roadmap.addEventListener("click", () => {
        showSection(roadmapSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(dashboardSection);
    });
};

if (deposit) {
    deposit.addEventListener("click", () => {
        showSection(userProfileSection);
        hideSection(marketSection);
        hideSection(dashboardSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (withdraw) {
    withdraw.addEventListener("click", () => {
        showSection(referralProgramSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
    });
};