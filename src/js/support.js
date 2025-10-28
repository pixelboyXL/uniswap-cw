import { navUserSections,
    supportLink,
    supportSection,
    supportBtnArchive,
    supportBtnNewTicket,
    archiveList,
    ticketList,
    ticketSection,
    createTicketCloseBtn,
    createTicketBackdrop,
    createTicket,
    ticketItem,
    ticketArrow } from "./refs";
import { toggleVisuallyHidden,
    toggleIsHidden, 
    showSection, 
    hideSection, 
    toggleCustomClass } from './simple';
import { hideMarketPiece } from './market';
import { hideMainSections, showPersonalSections } from './switching';

if (supportLink) {
    supportLink.addEventListener("click", () => {
        hideMarketPiece();
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

if (supportBtnNewTicket) {
    supportBtnNewTicket.addEventListener("click", toggleCreateTicket);
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

if (supportBtnArchive) {
    supportBtnArchive.addEventListener("click", () => {
        toggleVisuallyHidden(archiveList, ticketList);
    });
};