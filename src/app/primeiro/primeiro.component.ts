import { Component } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [
    MatToolbarModule,
    FlexLayoutModule
  ],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {

}
