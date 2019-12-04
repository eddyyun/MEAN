import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  @Output() messageEvent = new EventEmitter<object>();
  constructor() { }

  apiFormGroup = new FormGroup(
    {
      input_term: new FormControl('', [Validators.required, Validators.minLength(2)]),

    }
  );

  sendMessage() {
    this.messageEvent.emit(this.apiFormGroup.value);
  }

  onSubmit() {
    // console.log(`Sending ${this.apiFormGroup.value}`);
    console.log(this.apiFormGroup.value);
  }

}
