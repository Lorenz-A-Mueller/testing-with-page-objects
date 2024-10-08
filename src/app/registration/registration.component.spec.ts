import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageObject } from '../utils/page-object';

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
    // todo implement
  });

  it('given "submit" is clicked, contains a loading spinner ', () => {
    // todo implement
  });

  it('given that value for all form elements of the first debtor have been entered, clicking on the toggle button adds form elements', () => {});

  it('given form-elements for the second debtor have been added, clicking on the toggle button removes them', () => {
    // todo implement
  });
});

class RegistrationPageObject extends PageObject<RegistrationComponent> {
  public enterFirstDebtorFirstName(firstName: string): void {
    const debugElement = this.getElementByName('first-name-input-0');
    const inputElement: HTMLInputElement = debugElement.nativeElement;
    inputElement.value = firstName;
    inputElement.dispatchEvent(new Event('input'));
  }
}
