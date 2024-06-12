Feature: Article Page

    As a unauthenticated user
    I want to click on an article page
    and check the article
    So that I can verify the redirection from the menu and the article content

Background:
    Given an unauthenticated user

Scenario Outline: Category navigation
    Given the user is on the menu
    When the user clicks on a <category>
    Then the user is redirected to the correct <url>

    Examples:
        | category                 | url             |
        | "Lists"                  | "/lists/"       |
        | "Investment Newsletters" | "/newsletters/" |


    Scenario Outline: Billionaires Table reordering
    Given the user is on the menu on the Billionaires Category
    And the user clicks on <article>
    When the user orders by <order_by> the richest table 
    Then the table should be reordered by <order_by>

    Examples:
        | article              | order_by   | 
        | "Thailand's Richest" | "oldest"   |
        | "Thailand's Richest" | "youngest" |

Scenario Outline: Article redirection through search
    Given the user is on the search page
    When the user enters <term> into the search bar
    Then the article title should be the same as the article search result

    Examples:
        | term        |
        | "Ethereum"  |
        | "WWE"       |