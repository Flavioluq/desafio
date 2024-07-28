import { Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";



export const routes: Routes = [
    {
        path: 'primeiro',
        component: PrimeiroComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
];
