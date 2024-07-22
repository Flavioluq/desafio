import { Component } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [
    MatToolbarModule
  ],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {

}
