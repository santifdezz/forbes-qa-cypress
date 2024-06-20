export const homeElements = {
    HOME_URL: '/',
    ARTICLE_TITLE: 'a.headlink.h1--dense',
    MENU_ICON: 'div[aria-label="Open Navigation Menu"]',
    BILLIONAIRES: 'a[data-ga-track="U20 - Channel: Billionaires - Position 1"] + span',
    ACCEPT_COOKIES: 'button[aria-label="Reject All"]',
    LINK_MENU: 'a:contains(name)',
    CATEGORY_MENU: 'li:contains(name)',
    TIMEOUT: 15000
}
export const searchElements = {
    SEARCH_ICON: 'a[aria-label="Search"]',
    SEARCH_BAR: 'input.SearchField_input__K6yMG[name="query"]',
    SEARCH_URL: '/search/',
    SEARCH_ENTER: 'button[aria-label="Search"]',
    SEARCHED_RESULT: 'h3.CardArticle_headline___NhjF',
    NO_RESULTS: '.NoResults_title__Lx2Vo',
}
export const articleElements = {
    ARTICLE_URL: '/sites/',
    ARTICLE_TITLE: 'h1.fs-headline.speakable-headline',
    ARTICLE_TITLE_SEARCHED: 'h1.fs-headline.speakable-headline',
    RICHEST_YOUNGEST: ' li.tab.select.youngest',
    RICHEST_OLDEST: ' li.tab.select.oldest',
    RICHEST_TABLE: '//*[@id="list-table-body"]',
    TABLE_CELL : '//td[5]',
    ARTICLE_INDEX : 'a.isDg-4PG.LoxeK:contains(name)',
    
}
export const newsletterElements = {
    NEWSLETTER_URL: '/newsletters',
    NEWSLETTER_WEEKLY: 'button[value="ForbesWeekly"]',
    NEWSLETTER_TEXT: 'a[href="https://account.forbes.com/newsletters"]',
    EMAIL_INPUT: 'input.email',
    SEND_BUTTON: 'button.subscribe-button',
    SUCCESFULL_SUBSCRIPTION: 'h4:contains("You’re Subscribed!")',
    CLOSE_BOX: 'button.action__close',

}