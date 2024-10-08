# TestingWithPageObjects

Run `ng serve` to run the application. 
<br>Run `ng test` to execute all tests.

<br> The test-runner, Karma, can only run if there are no compilation-errors in the application.
So when you encounter a warning "No tests found" or similar, check if you can run the app.

## 1

In `app/utils` I have prepared an abstract "PageObject" class. 
<br> We will extend this class in the individual `.spec.ts` files of our components.
<br><br>
In the test-suite of RegistrationComponent, we already have the PageObject set up.
<br> Implement the "should contain a Form" test. Find a way to select the element from the `fixture` and assert its "truthiness". 
For that, create a method in the PageObject base class.

## 2

The RegistrationComponent contains a button that toggles the inclusion of a FromGroup for a second debtor in the DOM.
<br> Implement the two tests that verify the toggle-behavior.



