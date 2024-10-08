import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-success',
  standalone: true,
  imports: [MatButton],
  templateUrl: './registration-success.component.html',
  styleUrl: './registration-success.component.scss',
})
export class RegistrationSuccessComponent {
  private router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
