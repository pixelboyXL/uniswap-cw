import { navUserSections,
    supportLink,
    supportSection,
    supportBtn,
    ticketSection,
    createTicketCloseBtn,
    createTicketBackdrop,
    createTicket,
    ticketItem,
    ticketArrow } from "./refs";
import { toggleIsHidden, 
    showSection, 
    hideSection, 
    toggleCustomClass } from './simple';
import { hideDashboardPiece } from './market';
import { hideMainSections, showPersonalSections } from './switching';

if (supportLink) {
    supportLink.addEventListener("click", () => {
        hideDashboardPiece();
        hideMainSections();
        showPersonalSections(supportSection);
        toggleIsHidden(navUserSections);
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