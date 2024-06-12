Feature: Search Page
    As a unauthenticated user
    I want to search for a channel/category
    So that I can get the information neededs


Background:
    Given an unauthenticated user on the search page

Scenario Outline: Succesfull Search
    When the user enters valid <term> into the search bar
    Then the user should see search results that correspond to the search

    Examples:
        | term        |
        | "Ethereum"  |
        | "WWE"       |

Scenario: Invalid Search
    When the user enters invalid <term> into the search bar
    Then the user should see No results

    Examples:
        | term                             |
        | "uisdakfcedsvd"                  |
        | "fujdsvjdskfgbvdfbh"             |




