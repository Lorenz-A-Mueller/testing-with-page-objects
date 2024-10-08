import { Component, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { MatButtonToggle } from '@angular/material/button-toggle';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatButtonToggle,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnDestroy {
  public registrationForm = new FormArray<FormGroup<DebtorForm>>([
    this.getEmptyDebtorFormGroup(),
  ]);

  public isSecondDebtorToggled = false;
  private toggleSubscription: Subscription;

  constructor() {
    this.toggleSubscription = this.registrationForm.valueChanges.subscribe(
      (form) => {
        this.isSecondDebtorToggled = form.length == 2;
      },
    );
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }

  toggleSecondDebtor(): void {
    if (!this.isSecondDebtorToggled) {
      this.registrationForm.push(this.getEmptyDebtorFormGroup());
    } else {
      this.registrationForm.removeAt(1);
    }
  }

  getEmptyDebtorFormGroup(): FormGroup<DebtorForm> {
    return new FormGroup({
      firstName: new FormControl<string | null>(null),
      lastName: new FormControl<string | null>(null),
      age: new FormControl<number | null>(null),
    });
  }
}

type DebtorForm = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  age: FormControl<number | null>;
};
