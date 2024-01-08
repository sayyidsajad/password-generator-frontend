import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PassGenService } from './services/pass-gen.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClipboardService } from 'ngx-clipboard';

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
  password: string = '';
  checkboxValues = {
    length: this.charsLength,
    charsLower: false,
    charsUpper: false,
    charsNumeric: false,
    charsSymbols: false,
  };
  constructor(private _passGenService: PassGenService, private _toastr: ToastrService, private _clipboardService: ClipboardService) { }

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
    if (this.checkboxValues.length < 4 || this.checkboxValues.length > 30) {
      this._toastr.error('Invalid password length. Please enter a value between 4 and 30.');
      return;
    }
    const atLeastOneChecked =
      this.checkboxValues.charsLower ||
      this.checkboxValues.charsUpper ||
      this.checkboxValues.charsNumeric ||
      this.checkboxValues.charsSymbols;

    if (!atLeastOneChecked) {
      this._toastr.warning('Please check any of the fields', 'Fields Mandatory');
      return;
    }

    this._passGenService.getData(this.checkboxValues).subscribe({
      next: (password) => {
        this.password = password;
      }
    });
  }
  copyToClipboard(text: string): void {
    this._clipboardService.copyFromContent(text);
    this._toastr.success('Password copied to clipboard', 'Success');
  }
}
