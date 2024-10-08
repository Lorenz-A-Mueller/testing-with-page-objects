import { Component, inject, OnDestroy } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatButtonToggle,
    MatProgressSpinnerModule,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnDestroy {
  private router = inject(Router);

  public registrationForm = new FormArray<FormGroup<DebtorForm>>([
    this.getEmptyDebtorFormGroup(),
  ]);

  public isSecondDebtorToggled = false;
  private toggleSubscription: Subscription;

  public isSubmitting = false;
  public showFirstDebtorIncomplete = false;

  constructor() {
    this.toggleSubscription = this.registrationForm.valueChanges.subscribe(
      (form) => {
        this.isSecondDebtorToggled = form.length === 2;
      },
    );
  }

  ngOnDestroy(): void {
    this.toggleSubscription.unsubscribe();
  }

  public handleSecondDebtorClicked(): void {
    if (this.isSecondDebtorToggled) {
      this.registrationForm.removeAt(1);
    } else {
      if (!this.registrationForm.at(0).valid) {
        this.showFirstDebtorIncomplete = true;
        return;
      }
      this.registrationForm.push(this.getEmptyDebtorFormGroup());
    }
  }

  public submitRegistration(): void {
    this.isSubmitting = true;
    setTimeout(() => {
      this.router.navigate(['/success']);
    }, 2000);
  }

  private getEmptyDebtorFormGroup(): FormGroup<DebtorForm> {
    return new FormGroup({
      firstName: new FormControl<string | null>(null, Validators.required),
      lastName: new FormControl<string | null>(null, Validators.required),
      age: new FormControl<number | null>(null, Validators.required),
    });
  }
}

type DebtorForm = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  age: FormControl<number | null>;
};
