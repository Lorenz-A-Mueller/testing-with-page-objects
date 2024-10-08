import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageObject } from '../utils/page-object';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let page: RegistrationPageObject;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    page = new RegistrationPageObject(fixture);
    page.detectChanges();
  });

  it('creates', () => {
    expect(component).toBeTruthy();
  });

  it('contains a Form', () => {
    page.getForm();
    // todo implement
  });

  it('given "submit" is clicked, contains a loading spinner ', () => {
    // todo implement
    page.clickSubmitButton();
    page.detectChanges();
    page.getSpinner();
  });

  it('given that value for all form elements of the first debtor have been entered, clicking on the toggle button adds form elements', () => {
    page.enterFirstDebtorFirstName('Max');
    page.enterFirstDebtorLastName('Mustermann');
    page.enterFirstDebtorAge(30);
    page.detectChanges();
    page.clickToggleButton();
    page.detectChanges();
    page.getSecondDebtorFirstNameInput();
  });

  it('given form-elements for the second debtor have been added, clicking on the toggle button removes them', () => {
    // todo implement
    page.setUpSecondDebtor();
    page.detectChanges();
    expect(fixture.componentRef.instance.registrationForm.length).toEqual(2);
    page.clickToggleButton();
    page.detectChanges();
    expect(page.getSecondDebtorFirstNameInputWithoutAsserting()).toBeNull();
  });
});

class RegistrationPageObject extends PageObject<RegistrationComponent> {
  public enterFirstDebtorFirstName(firstName: string): void {
    const debugElement = this.getElementByName('first-name-input-0');
    const inputElement: HTMLInputElement = debugElement.nativeElement;
    inputElement.value = firstName;
    inputElement.dispatchEvent(new Event('input'));
  }

  public enterFirstDebtorLastName(lastName: string): void {
    const debugElement = this.getElementByName('last-name-input-0');
    const inputElement: HTMLInputElement = debugElement.nativeElement;
    inputElement.value = lastName;
    inputElement.dispatchEvent(new Event('input'));
  }

  public enterFirstDebtorAge(age: number): void {
    const debugElement = this.getElementByName('age-input-0');
    const inputElement: HTMLInputElement = debugElement.nativeElement;
    inputElement.value = age.toString();
    inputElement.dispatchEvent(new Event('input'));
  }

  public clickToggleButton() {
    this.clickElementByName('toggleButton');
  }

  public clickSubmitButton() {
    this.clickElementByName('submit');
  }

  public getSecondDebtorFirstNameInput() {
    return this.getElementByName('first-name-input-1');
  }

  public getSecondDebtorFirstNameInputWithoutAsserting() {
    return this.getElementByNameAndDoNotAssert('first-name-input-1');
  }

  public getForm() {
    return this.getElementByName('form');
  }

  public getSpinner() {
    return this.getElementByTag('mat-spinner');
  }

  public setUpSecondDebtor(): void {
    this.fixture.componentRef.instance.registrationForm.push(
      new FormGroup({
        firstName: new FormControl<string | null>(null, Validators.required),
        lastName: new FormControl<string | null>(null, Validators.required),
        age: new FormControl<number | null>(null, Validators.required),
      }),
    );
  }
}
