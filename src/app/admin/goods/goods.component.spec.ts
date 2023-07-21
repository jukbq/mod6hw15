import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsComponent } from './goods.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@angular/fire/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesComponent } from '../categories/categories.component';
import { ActivatedRoute } from '@angular/router';

describe('GoodsComponent', () => {
  let component: GoodsComponent;
  let fixture: ComponentFixture<GoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [CategoriesComponent],
      providers: [
        FormBuilder,
        { provide: Storage, useValue: {} },
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
