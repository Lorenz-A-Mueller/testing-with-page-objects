import { environment } from '../../src/environment';

export class RegistrationPage {
  public visit() {
    cy.visit(environment.BASE_URL);
  }

  public expectHeadline(): void {
    const headline = cy.get('h1');
    headline.contains('Loan Shark Banks');
  }

  public enterFirstDebtorFirstName(name: string): this {
    const el = cy.get('[id="first-name-input-0"]');
    el.type(name);
    return this;
  }

  public enterFirstDebtorLastName(name: string): this {
    const el = cy.get('[id="last-name-input-0"]');
    el.type(name);
    return this;
  }

  public enterFirstDebtorAge(age: number): this {
    const el = cy.get('[id="age-input-0"]');
    el.type(age.toString());
    return this;
  }

  public enterSecondDebtorFirstName(name: string): this {
    const el = cy.get('[id="first-name-input-1"]');
    el.type(name);
    return this;
  }

  public enterSecondDebtorLastName(name: string): this {
    const el = cy.get('[id="last-name-input-1"]');
    el.type(name);
    return this;
  }

  public enterSecondDebtorAge(age: number): this {
    const el = cy.get('[id="age-input-1"]');
    el.type(age.toString());
    return this;
  }

  public clickToggleButton(): this {
    cy.get(this.getNameSelector('toggleButton')).click();
    return this;
  }

  public clickSubmitButton(): this {
    cy.get(this.getNameSelector('submit')).click();
    return this;
  }

  public getNameSelector(name: string): string {
    return `[name="${name}"]`;
  }
}
