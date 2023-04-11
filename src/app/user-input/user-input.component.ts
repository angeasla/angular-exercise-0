import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  inputString = '';
  @Output() textSubmitted = new EventEmitter<string>();

  submitInput() {
    this.textSubmitted.emit(this.inputString);
    this.inputString = '';
  }
}
