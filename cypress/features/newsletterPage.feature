Feature: NewsletterPage

As a user
I want to subscribe to the newsletter
So that I can receive email updates

Background:
    Given a unauthenticated user on the newsletter page

Scenario: Succesfull subscription to newsletter
    Given the user selects a newsletter and fill with a valid email
    When the user selects the subscribe button
    Then the user should see that he has been subscribed to the newsletter

Scenario: Invalid subscription to newsletter
    Given the user selects a newsletter
    When the user fill with a invalid email
    Then the subscribe button should be disabled 