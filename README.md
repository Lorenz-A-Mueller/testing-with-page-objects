# TestingWithPageObjects

Run `ng serve` to run the application. 
<br>Run `ng test` to execute all unit tests.

<br> The test-runner, Karma, can only run if there are no compilation-errors in the application.
So when you encounter a warning "No tests found" or similar, check if you can run the app.

## 1

In `app/utils` I have prepared an abstract "PageObject" class. 
<br> This class can be used in the individual `.spec.ts` files of our components to provide generic methods.
<br>
<br><br>
In the test-suite of RegistrationComponent, we already have the PageObject set up.
<br> Implement the "should contain a Form" test. Find a way to select the element from the `fixture` and assert its "truthiness". 
For that, create a method in the PageObject base class.

## 2

The RegistrationComponent contains a button that toggles the inclusion of a FromGroup for a second debtor in the DOM.
<br> Implement the two tests that verify the toggle-behavior.


## 3

The application also contains Cypress, a powerful tool for running e2e-tests.
<br> Cypress provides an interactive UI that can be used in development. In CI, it is usually run using a headless browser like Electron.
<br> To access the interactive UI, run `npm run cy:open`, choose "e2e-tests" and then Chrome.
<br> You can also run `npx cypress run` to run the specs in Electron from the commandline.
<br>
<br> In `/cypress/e2e` you find a spec containing tests to be executed by Cypress.
<br> Complete them using the Page Object in `cypress/pages`
