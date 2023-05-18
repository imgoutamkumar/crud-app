import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css'],
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  degree: string[] = ['B.Tech', 'Diploma', 'BCA', 'M.Tech'];

  constructor(
    private _fb: FormBuilder,
    private _empservice: EmployeeService,
    private _dialogRef: DialogRef<EmpAddEditComponent>
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: '',
      degree: '',
      specilization: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empservice.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Successfullly');
          this._dialogRef.close();
        },
        error: () => {
          console.log(Error);
        },
      });
    }
  }
}
