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

  it('given a second debtor has not been added, clicking on the toggle button adds form elements', () => {
    // todo implement
  });

  it('given form-elements for the second debtor have been added, clicking on the toggle button removes them', () => {
    // todo implement
  });
});

class RegistrationPageObject extends PageObject<RegistrationComponent> {}
