import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  formControl!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.formControl = new FormControl();
  }
}
