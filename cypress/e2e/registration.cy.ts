import { RegistrationPage } from '../pages/registration';

describe('registration', () => {
  const page = new RegistrationPage();

  it('displays headline', () => {
    page.visit();
    page.expectHeadline();
  });

  it('enter data for first debtor', () => {
    // todo implement
  });

  it('toggle button to display second debtor and enters data', () => {
    // todo implement
  });

  it('click submit, get redirected to success page', () => {
    // todo implement
  });
});
