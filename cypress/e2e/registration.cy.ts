import { RegistrationPage } from '../pages/registration';
import { SuccessPage } from '../pages/success';

describe('registration', () => {
  const registrationPage = new RegistrationPage();
  const successPage = new SuccessPage();

  it('displays headline', () => {
    registrationPage.visit();
    registrationPage.expectHeadline();
  });

  it('enter data for first debtor, toggle button to display second debtor and enters data', () => {
    registrationPage
      .enterFirstDebtorFirstName('Max')
      .enterFirstDebtorLastName('Mustermann')
      .enterFirstDebtorAge(30)
      .clickToggleButton()
      .enterSecondDebtorFirstName('Maria')
      .enterSecondDebtorLastName('Meier')
      .enterSecondDebtorAge(32);
  });

  it('click submit, get redirected to success page', () => {
    registrationPage.clickSubmitButton();
    successPage.checkUrl();
    successPage.expectHeadline();
  });
});
