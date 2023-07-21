import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallBackComponent } from './call-back.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { InjectionToken } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';

class MockAuth {}
class MockFirestore {}
class MockToastrService {}
class MockMatDialogRef {}

const toastConfig: Partial<InjectionToken<ToastrService>> = {};

describe('CallBackComponent', () => {
  let component: CallBackComponent;
  let fixture: ComponentFixture<CallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, OverlayModule],
      declarations: [CallBackComponent],
      providers: [
        { provide: Auth, useClass: MockAuth },
        { provide: Firestore, useClass: MockFirestore },
        { provide: ToastrService, useClass: MockToastrService },
        { provide: InjectionToken, useValue: toastConfig },
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        MatDialog,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
