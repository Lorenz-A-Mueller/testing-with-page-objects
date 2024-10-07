import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInput],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  public form = new FormGroup({
    firstName: new FormControl<string | null>(null),
    lastName: new FormControl<string | null>(null),
    age: new FormControl<number | null>(null),
  });
}
