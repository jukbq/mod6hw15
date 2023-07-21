import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SighUpComponent } from './sigh-up.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InjectionToken } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { SighInComponent } from '../sigh-in/sigh-in.component';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

class MockFirestore {}
class MockToastrService {
  success(message?: string, title?: string): void {}
  error(message?: string, title?: string): ActiveToast<any> {
    return {} as ActiveToast<any>;
  }
}
class MockMatDialogRef {}

const toastConfig: Partial<InjectionToken<ToastrService>> = {};

describe('SighUpComponent', () => {
  let component: SighUpComponent;
  let fixture: ComponentFixture<SighUpComponent>;
  let toastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatDialogModule, OverlayModule],
      declarations: [SighUpComponent, SighInComponent],
      providers: [
        FormBuilder,
        { provide: Auth, useValue: {} },
        { provide: Firestore, useClass: MockFirestore },
        { provide: ToastrService, useClass: MockToastrService },
        { provide: InjectionToken, useValue: toastConfig },
        { provide: MatDialogRef, useClass: MockMatDialogRef },
        MatDialog,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SighUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    toastr = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.sighUoForn).toBeDefined();
    expect(component.sighUoForn?.get('firstname')?.value).toBeNull();
    expect(component.sighUoForn?.get('lastname')?.value).toBeNull();
    expect(component.sighUoForn?.get('phone')?.value).toBeNull();
    expect(component.sighUoForn?.get('email')?.value).toBeNull();
    expect(component.sighUoForn?.get('password')?.value).toBeNull();
    expect(component.sighUoForn?.get('password2')?.value).toBeNull();
  });

  it('should register user and show success message when passwords match', async () => {
    spyOn(toastr, 'success');
    spyOn(component, 'sighInMaoal');
    spyOn(component, 'enailSighUp').and.returnValue(Promise.resolve());
    component.sighUoForn.patchValue({
      password: 'password',
      password2: 'password',
      email: 'test@example.com',
      firstname: 'John',
      lastname: 'Doe',
      phone: '123456789',
    });
    await component.userRegister();
    expect(toastr.success).toHaveBeenCalled();
    expect(component.sighInMaoal).toHaveBeenCalled();
  });

  it('should show an error message when user registration fails', async () => {
    spyOn(toastr, 'error').and.callFake((message: string): ActiveToast<any> => {
      expect(message).toBe('Корситувача з такою адресою вже зареєстровано');
      return {} as ActiveToast<any>;
    });
    spyOn(component, 'sighInMaoal');
    spyOn(component, 'enailSighUp').and.returnValue(
      Promise.reject(new Error('Registration failed'))
    );
    component.sighUoForn.patchValue({
      password: 'password',
      password2: 'password',
      email: 'test@example.com',
      firstname: 'John',
      lastname: 'Doe',
      phone: '123456789',
    });
    await component.userRegister();
    expect(component.sighInMaoal).not.toHaveBeenCalled();
  });
});
