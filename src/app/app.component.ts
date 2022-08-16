import { Component, Injectable, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

// import Validation from './utils/validation';
import { SpinnerService } from './_services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'real-estate-admin'

  constructor(public spinner: SpinnerService) {  }
}
