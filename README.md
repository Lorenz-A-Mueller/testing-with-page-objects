# Testing With Page Objects

Page Objects are a common practice to separate concerns in FE test. 
They provide an API that does not expose the querying logic to fetch elements that are to be asserted or interacted with, but is concerned with terminology a user could use.

With this little Angular application, we will apply Page Objects both in Component and E2E tests.

Run `ng serve` to run the application.

## 1

Component (unit) tests with the Jasmine test-framework (using Karma as test-runner).
<br>Run `ng test` to execute all component unit tests.
<br> Note: Karma can only run if there are no compilation-errors in the application.
So when you encounter a warning "No tests found" or similar, check if you can run the app.

In `app/utils` I have prepared an abstract PageObject class.
<br> This class can be used in the individual `.spec.ts` files of our components to provide generic methods.
<br>
<br>
In the test-suite of RegistrationComponent, we already have the PageObject set up.
<br> Implement the tests. You can use the `getElementByName` method of the base class and the existing method of the subclass.

## 2

The application also contains Cypress, a powerful tool for running e2e-tests.
<br> Cypress provides an interactive UI that can be used in development. In CI, it is usually run using a headless browser like Electron.
<br> To access the interactive UI, run `npm run cy:open`, choose "e2e-tests" and then Chrome.
<br> You can also run `npx cypress run` to run the specs in Electron from the commandline.
<br>
<br> In `/cypress/e2e` you find a spec containing tests to be executed by Cypress.
<br> Complete them using the Page Object in `cypress/pages`
