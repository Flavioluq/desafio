import { Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';

export const routes: Routes = [
    {
        path: 'primeiro',
        component: PrimeiroComponent
    },
    {
        path: 'segundo',
        component: PrimeiroComponent
    }
];
