import { environment } from '../../src/environment';

export class SuccessPage {
  public checkUrl() {
    const url = cy.url;
    cy.url().should('eq', `${environment.BASE_URL}/success`);
  }

  public expectHeadline(): void {
    const headline = cy.get('h2');
    headline.contains('Registration');
  }
}
