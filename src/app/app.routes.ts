import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';

export const routes: Routes = [
  {
    title: 'registration-success',
    component: RegistrationSuccessComponent,
    path: 'success',
  },
  {
    title: 'registration',
    component: RegistrationComponent,
    path: '**',
  },
];
