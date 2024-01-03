import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PassGenService } from './services/pass-gen.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-generator';
  charsLength: number = 4;
  checkboxValues = {
    length: this.charsLength,
    charsLower: false,
    charsUpper: false,
    charsNumeric: false,
    charsSymbols: false,
  };
  constructor(private _passGenService: PassGenService) { }

  onCheckboxChange(checked: string) {
    if (checked === 'lower') {
      this.checkboxValues.charsLower = !this.checkboxValues.charsLower;
    } else if (checked === 'upper') {
      this.checkboxValues.charsUpper = !this.checkboxValues.charsUpper;
    } else if (checked === 'symbol') {
      this.checkboxValues.charsSymbols = !this.checkboxValues.charsSymbols;
    } else if (checked === 'number') {
      this.checkboxValues.charsNumeric = !this.checkboxValues.charsNumeric;
    }
  }

  genPass(): void {
    this._passGenService.getData(this.checkboxValues).subscribe(
      (data) => {
        console.log('Data from API:', data);
      },
      (error) => {
        console.error('Error fetching data from API:', error);
      }
    );
  }
}
