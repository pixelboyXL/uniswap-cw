import { navUserIcon,
    navUserSections,
    userProfileSection,
    referralProgramSection,
    dashboardSection,
    whitePaperSection,
    roadmapSection,
    dashboardLink,
    whitePaperLink,
    roadmapLink,
    faqLink,
    myProfileLink,
    referralProgramLink,
    supportSection,
    ticketSection,
    faqSection } from './refs';
import { toggleIsHidden, 
    showSection, 
    hideSection,
    addLinkActive,
    removeLinkActive } from './simple';
import { showDashboardPiece, hideDashboardPiece } from './dashboard';

if (navUserIcon) {
    navUserIcon.addEventListener("click", () => {
        toggleIsHidden(navUserSections);
    });
};

export function showMainSections (sectionToShow, linkToActive) {
    hideMainSections();

    addLinkActive(linkToActive);
    showSection(sectionToShow);
};

export function hideMainSections () {
    removeLinkActive(whitePaperLink);
    hideSection(whitePaperSection);
    removeLinkActive(roadmapLink);
    hideSection(roadmapSection);
    removeLinkActive(faqLink);
    hideSection(faqSection);
};

if (dashboardLink) {
    dashboardLink.addEventListener("click", () => {
        showDashboardPiece();
        hideMainSections();
        hidePersonalSections();
    });
};

if (whitePaperLink) {
    whitePaperLink.addEventListener("click", () => {
        showMainSections(whitePaperSection, whitePaperLink);
        hideDashboardPiece();
        hidePersonalSections();
    });
};

if (roadmapLink) {
    roadmapLink.addEventListener("click", () => {
        showMainSections(roadmapSection, roadmapLink);
        hideDashboardPiece();
        hidePersonalSections();
    });
};

if (faqLink) {
    faqLink.addEventListener("click", () => {
        showMainSections(faqSection, faqLink);
        hideDashboardPiece();
        hidePersonalSections();
    });
};

export function showPersonalSections (sectionToShow) {
    hidePersonalSections();

    showSection(sectionToShow);
};

export function hidePersonalSections () {
    hideSection(userProfileSection);
    hideSection(referralProgramSection);
    hideSection(supportSection);
    hideSection(ticketSection);
};

if (myProfileLink) {
    myProfileLink.addEventListener("click", () => {
        hideDashboardPiece();
        hideMainSections();
        showPersonalSections(userProfileSection);
        toggleIsHidden(navUserSections);
    });
};

if (referralProgramLink) {
    referralProgramLink.addEventListener("click", () => {
        hideDashboardPiece();
        hideMainSections();
        showPersonalSections(referralProgramSection);
        toggleIsHidden(navUserSections);
    });
};