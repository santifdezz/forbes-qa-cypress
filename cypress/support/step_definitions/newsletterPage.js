import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as HomePage from '../../functions/homePage.js';
import * as NewsletterPage from '../../functions/newsletterPage.js';
import { onClick } from "../../functions/commonFunctions.js";
import {newsletterElements} from "../constants.js";

// Background
Given('a unauthenticated user on the newsletter page', () => {
    HomePage.visitNewsletter();
});
Given('the user selects a newsletter and fill with a valid email', () => {
    onClick(newsletterElements.NEWSLETTER_WEEKLY)
    NewsletterPage.fillEmail(true);
});


When('the user selects the subscribe button', () => {
    onClick(newsletterElements.SEND_BUTTON, true)
});


Then('the user should see that he has been subscribed to the newsletter', () => {
    NewsletterPage.checkNewsletter();
});


Given('the user selects a newsletter', () => {
    onClick(newsletterElements.NEWSLETTER_WEEKLY)
});

When('the user fill with a invalid email', () => {
    NewsletterPage.fillEmail(false);
});
Then('the subscribe button should be disabled', () => {
    NewsletterPage.checkInvalidNewsletter();
});


