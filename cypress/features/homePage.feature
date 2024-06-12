Feature: Home Page

    As a unauthenticated user
    I want to click on the article of the day
    So that I can read its content

Background:
    Given a unauthenticated user on the homepage

Scenario: Viewing the 'article of the day' 
    When the user clicks on the main article
    Then the user should be redirected to the article page