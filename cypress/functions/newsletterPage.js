import {newsletterElements} from "../constants.js";
import { onClick, getElement, typeInput } from "./commonFunctions.js";


export const fillEmail = (email) => typeInput(newsletterElements.EMAIL_INPUT, email);
export const clickOnInvalidNewsletter = () => getElement(newsletterElements.SEND_BUTTON).should('be.disabled');
export const clickOnNewsletter = () => onClick(newsletterElements.NEWSLETTER_WEEKLY);
export const clickOnSendButton = ()  => onClick(newsletterElements.SEND_BUTTON);
export const clickOnCloseButton = () => onClick(newsletterElements.CLOSE_BOX);
export const checkUnsuscribedOnNewsletter = () => getElement(newsletterElements.NEWSLETTER_WEEKLY).should('have.css', 'background-color', 'rgb(255, 255, 255)');
export const checkSuscribedOnNewsletter = () => expect(newsletterElements.SUCCESFULL_SUBSCRIPTION).to.exist;
export const checkInvalidNewsletter = () => getElement(newsletterElements.SEND_BUTTON).should('be.disabled');