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
    navUserSections,
    marketSection,
    userProfileSection,
    referralProgramSection,
    dashboardSection,
    roadmapSection,
    footerSection,
    dashboardLink,
    whitePaperLink,
    whitePaperMobLink,
    stakeMobLink,
    myPositionsMobLink,
    roadmapLink,
    myProfileLink,
    referralProgramLink,
    headerMobMenu,
    mobMenuBackdrop,
    mobMenu } from './refs';
import { toggleIsHidden, 
    showSection, 
    hideSection, 
    addCurrentClass, 
    removeCurrentClass, 
    toggleCustomClass,
    addLinkActive,
    removeLinkActive,
    getViewWidth } from './simple';

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

// if (navUserIcon) {
//     navUserIcon.addEventListener("click", () => {
//         showSection(authorizationSection);
//         hideSection(headerSection);
//         hideSection(headerMobSection);
//         hideSection(marketSection);
//         hideSection(userProfileSection);
//         hideSection(referralProgramSection);
//         hideSection(dashboardSection);
//         hideSection(roadmapSection);
//         hideSection(footerSection);
//     });
// };

if (navUserIcon) {
    navUserIcon.addEventListener("click", () => {
        toggleIsHidden(navUserSections);
    });
};

if (dashboardLink) {
    dashboardLink.addEventListener("click", () => {
        addLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        showSection(marketSection);
        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (whitePaperLink) {
    whitePaperLink.addEventListener("click", () => {
        addLinkActive(whitePaperLink);
        removeLinkActive(dashboardLink);
        removeLinkActive(roadmapLink);
        showSection(dashboardSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (roadmapLink) {
    roadmapLink.addEventListener("click", () => {
        addLinkActive(roadmapLink);
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        showSection(roadmapSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(dashboardSection);
    });
};

if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        toggleIsHidden(navUserSections);
        showSection(userProfileSection);
        hideSection(marketSection);
        hideSection(dashboardSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (referralProgramLink) {
    referralProgramLink.addEventListener("click", () => {
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        toggleIsHidden(navUserSections);
        showSection(referralProgramSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
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
        showSection(marketSection);
        addCurrentClass(linkToMarket);
        showSection(marketTokensGridMob);
        removeCurrentClass(linkToStake);
        hideSection(marketStakeForm);
        removeCurrentClass(linkToMyPositions);
        hideSection(marketMyPositions);
        
        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (stakeMobLink) {
    stakeMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showSection(marketSection);
        addCurrentClass(linkToStake);
        showSection(marketStakeForm);
        removeCurrentClass(linkToMarket)
        hideSection(marketTokensGridMob);
        removeCurrentClass(linkToMyPositions);
        hideSection(marketMyPositions);

        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};

if (myPositionsMobLink) {
    myPositionsMobLink.addEventListener("click", () => {        
        toggleMobMenu();
        showSection(marketSection);
        addCurrentClass(linkToMyPositions);
        showSection(marketMyPositions);
        removeCurrentClass(linkToMarket)
        hideSection(marketTokensGridMob);
        removeCurrentClass(linkToStake);
        hideSection(marketStakeForm);
        
        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
    });
};