import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
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
import { SighInComponent } from './sigh-in.component';

class MockFirestore {}
class MockMatDialogRef {}

const mockToastrService = jasmine.createSpyObj('ToastrService', ['success']);

const toastConfig: Partial<InjectionToken<ToastrService>> = {};

describe('SighInComponent', () => {
  let component: SighInComponent;
  let fixture: ComponentFixture<SighInComponent>;
  let toastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, OverlayModule],
      declarations: [SighInComponent],
      providers: [
        FormBuilder,
        { provide: Auth, useValue: {} },
        { provide: Firestore, useClass: MockFirestore },
        { provide: ToastrService, useValue: mockToastrService },
        { provide: InjectionToken, useValue: toastConfig },
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        MatDialog,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SighInComponent);
    component = fixture.componentInstance;
    toastr = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('email')).not.toBeNull();
    expect(component.loginForm.get('password')).not.toBeNull();
  });
});
