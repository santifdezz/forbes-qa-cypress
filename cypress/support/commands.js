// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
let COOKIES;

Cypress.Commands.add('saveCookies', () => {
  cy.getCookies().then((cookies) => {
    COOKIES = cookies;
  });
});

Cypress.Commands.add('restoreCookies', () => {
  COOKIES.forEach((cookie) => {
    cy.setCookie(cookie.name, cookie.value, {
      domain: cookie.domain,
      expiry: cookie.expiry,
      httpOnly: cookie.httpOnly,
      path: cookie.path,
      secure: cookie.secure,
    });
  });
});
Cypress.on('uncaught:exception', (err, runnable) => {
      // Deja que los demás errores no capturados provoquen un fallo en la prueba
    return false;
});
Cypress.on('unhandledrejection', (err, runnable) => {
  console.error('Unhandled promise rejection:', err);
  return false;
});
