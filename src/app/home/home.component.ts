import { Component } from '@angular/core';

import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _dialog: MatDialog) {}

  OpenEmpAddEditForm() {
    this._dialog.open(EmpAddEditComponent);
  }
}
