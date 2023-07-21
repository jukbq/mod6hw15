import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.css'],
})
export class CallBackComponent implements OnInit {
  public callBackForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: Auth,
    private afs: Firestore,
    private toastr: ToastrService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CallBackComponent>
  ) {}

  ngOnInit(): void {
    this.logFormInit();
  }

  logFormInit(): void {
    this.callBackForm = this.formBuilder.group({
      firstname: [null, Validators.required],
      phone: [null],
    });
  }

  submitCallBack(): void {
    const { firstname, phone } = this.callBackForm.value;
    this.closeModal();
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
