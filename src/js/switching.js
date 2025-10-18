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
    headerSection,
    footerSection,
    dashboardLink,
    whitePaperLink,
    whitePaperMobLink,
    stakeMobLink,
    myPositionsMobLink,
    roadmapLink,
    faqLink,
    myProfileLink,
    referralProgramLink,
    supportLink,
    logoutLink,
    uniswapBackdrop,
    uniswapBackdropWrap,
    uniswapMessageBtnLogout,
    uniswapMessageBtnNoLogout,
    headerMobMenu,
    mobMenuBackdrop,
    mobMenu,
    supportBtn,
    createTicketCloseBtn,
    createTicketBackdrop,
    createTicket, 
    supportSection,
    ticketSection,
    ticketItem,
    ticketArrow,
    faqSection } from './refs';
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

if (navUserIcon) {
    navUserIcon.addEventListener("click", () => {
        toggleIsHidden(navUserSections);
    });
};

if (dashboardLink) {
    dashboardLink.addEventListener("click", () => {
        addLinkActive(dashboardLink);
        addCurrentClass(linkToMarket);
        showSection(marketTokensGrid);
        removeCurrentClass(linkToStake);
        hideSection(marketStakeForm);
        removeCurrentClass(linkToMyPositions);
        hideSection(marketMyPositions);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        showSection(marketSection);
        hideSection(dashboardSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(faqSection);
    });
};

if (whitePaperLink) {
    whitePaperLink.addEventListener("click", () => {
        addLinkActive(whitePaperLink);
        removeLinkActive(dashboardLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        showSection(dashboardSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(faqSection);
    });
};

if (roadmapLink) {
    roadmapLink.addEventListener("click", () => {
        addLinkActive(roadmapLink);
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(faqLink);
        showSection(roadmapSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(dashboardSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(faqSection);
    });
};

if (faqLink) {
    faqLink.addEventListener("click", () => {
        addLinkActive(faqLink);
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        showSection(faqSection);
        hideSection(marketSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(supportSection);
        hideSection(ticketSection);
    });
};

if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        toggleIsHidden(navUserSections);
        showSection(userProfileSection);
        hideSection(marketSection);
        hideSection(dashboardSection);
        hideSection(referralProgramSection);
        hideSection(roadmapSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(faqSection);
    });
};

if (referralProgramLink) {
    referralProgramLink.addEventListener("click", () => {
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        toggleIsHidden(navUserSections);
        showSection(referralProgramSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(faqSection);
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
        hideSection(supportSection);
        hideSection(ticketSection);
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
        hideSection(supportSection);
        hideSection(ticketSection);
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
        hideSection(supportSection);
        hideSection(ticketSection);
    });
};

if (supportLink) {
    supportLink.addEventListener("click", () => {        
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        toggleIsHidden(navUserSections);
        showSection(supportSection);
        hideSection(marketSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
        hideSection(ticketSection);
        hideSection(faqSection);
    });
};

function toggleCreateTicket () {
    const createTicketVisible = "create-ticket-visible";
    toggleIsHidden(createTicketBackdrop);
    toggleCustomClass(createTicket, createTicketVisible);
};

if (supportBtn) {
    supportBtn.addEventListener("click", toggleCreateTicket);
};

if (createTicketCloseBtn) {
    createTicketCloseBtn.addEventListener("click", toggleCreateTicket);
};

if (ticketItem) {
    ticketItem.addEventListener("click", () => {
        showSection(ticketSection);
        hideSection(supportSection);
    });
};

if (ticketArrow) {
    ticketArrow.addEventListener("click", () => {
        showSection(supportSection);
        hideSection(ticketSection);
    });
};

if (logoutLink) {
    logoutLink.addEventListener("click", () => {
        toggleIsHidden(navUserSections);
        toggleUniswapMessage();
    });
};

function toggleUniswapMessage () {
    const uniswapMessageVisible = "uniswap-backdrop__wrap-visible";
    toggleIsHidden(uniswapBackdrop);
    toggleCustomClass(uniswapBackdropWrap, uniswapMessageVisible);
};

if (uniswapMessageBtnLogout) {
    uniswapMessageBtnLogout.addEventListener("click", () => { 
        toggleUniswapMessage();
        removeLinkActive(dashboardLink);
        removeLinkActive(whitePaperLink);
        removeLinkActive(roadmapLink);
        removeLinkActive(faqLink);
        showSection(authorizationSection);
        hideSection(headerSection);
        hideSection(marketSection);
        hideSection(dashboardSection);
        hideSection(roadmapSection);
        hideSection(faqSection);
        hideSection(userProfileSection);
        hideSection(referralProgramSection);
        hideSection(supportSection);
        hideSection(ticketSection);
        hideSection(footerSection);
    });
};

if (uniswapMessageBtnNoLogout) {
    uniswapMessageBtnNoLogout.addEventListener("click", toggleUniswapMessage);
};