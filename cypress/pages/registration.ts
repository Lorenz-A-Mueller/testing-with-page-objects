import { environment } from '../../src/environment';

export class RegistrationPage {
  public visit() {
    cy.visit(environment.BASE_URL);
  }

  public expectHeadline(): void {
    const headline = cy.get('h1');
    headline.contains('Loan Shark Banks');
  }
}
