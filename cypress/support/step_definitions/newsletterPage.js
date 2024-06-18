import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as HomePage from '../../functions/homePage.js';
import * as NewsletterPage from '../../functions/newsletterPage.js';

// Background
Given('an unauthenticated user on the newsletter page', () => {
    HomePage.visitNewsletter();
});
Given('the user selects a newsletter', () => {
    NewsletterPage.clickOnNewsletter();
});

Given('the user fills email field with a valid {string}', (email) => {
    NewsletterPage.fillEmail(email);
});
Given('the user fills email field using valid {string}', (email) => {
    NewsletterPage.fillEmail(email);
});
Given('the user fills email field with invalid {string}', (email) => {
    NewsletterPage.fillEmail(email);
});

When('the user selects the subscribe button', () => {
    NewsletterPage.clickOnSendButton();
});
Then('the user should see that he has been subscribed to the newsletter', () => {
    NewsletterPage.checkSuscribedOnNewsletter();
});


When('the user try to selects the suscribe buttton on the newsletter page', () => {
    NewsletterPage.clickOnInvalidNewsletter();
});

Then('the subscribe button should be disabled', () => {
    NewsletterPage.checkInvalidNewsletter();
});


Given('the user selects the subscribe button on the newsletter page', () => {
    NewsletterPage.clickOnSendButton();
});
Given('the user closes the newsletter Pop-up', () => {
    NewsletterPage.clickOnCloseButton();
});
When('the user unselects the newsletter button', () => {
    NewsletterPage.clickOnNewsletter();
});

Then('the user should see that he has been unsubscribed to the newsletter', () => {
    NewsletterPage.checkUnsuscribedOnNewsletter();
});

