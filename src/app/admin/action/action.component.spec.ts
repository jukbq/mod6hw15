import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@angular/fire/storage';
import { of } from 'rxjs';
import { ActionComponent } from './action.component';
import { ActionService } from 'src/app/shared/services/action/action.service';
import { ActionResponse } from 'src/app/shared/interfaces/action';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;
  let actionService: ActionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ReactiveFormsModule],
      declarations: [ActionComponent],
      providers: [
        FormBuilder,
        { provide: Storage, useValue: {} },
        { provide: ActionService, useValue: { getAll: () => of([]) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    actionService = TestBed.inject(ActionService);
    spyOn(actionService, 'getAll').and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize actionForn with correct values', () => {
    expect(component.actionForn.get('data')?.value).toBe(component.data);
    expect(component.actionForn.get('name')?.value).toBeNull();
    expect(component.actionForn.get('title')?.value).toBeNull();
    expect(component.actionForn.get('description')?.value).toBeNull();
    expect(component.actionForn.get('images')?.value).toBeNull();
  });

  it('should call getACtiont method on ngOnInit', () => {
    component.ngOnInit();
    expect(actionService.getAll).toHaveBeenCalled();
  });
});
