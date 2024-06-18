Feature: Subscription to newsletter

    As a user
    I want to subscribe to the newsletter
    So that I can receive email updates

Background:
    Given an unauthenticated user on the newsletter page
    Given the user selects a newsletter


Scenario Outline: Succesful subscription to newsletter
    Given the user fills email field with a valid "<email>"
    When the user selects the subscribe button
    Then the user should see that he has been subscribed to the newsletter

    Examples:
        | email                  |
        | juanitoox4@gmail.com   |

Scenario Outline: Succesful unsubscription to newsletter
    Given the user fills email field using valid "<email>"
    And the user selects the subscribe button on the newsletter page
    And the user closes the newsletter Pop-up
    When the user unselects the newsletter button
    Then the user should see that he has been unsubscribed to the newsletter

    Examples:
        | email                  |
        | juanitoox4@gmail.com   |

Scenario Outline: Invalid subscription to newsletter
    Given the user fills email field with invalid "<email>"
    When the user try to selects the suscribe buttton on the newsletter page
    Then the subscribe button should be disabled

    Examples:
        | email                     |
        | jsfbcesdfj@fuhisjdfvcds   |
        