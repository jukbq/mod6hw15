import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HraderComponent } from './hrader.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OrderService } from '../../shared/services/order/order.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

describe('HraderComponent', () => {
  let component: HraderComponent;
  let fixture: ComponentFixture<HraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [HraderComponent],
      providers: [OrderService, { provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(HraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add items to basket from localStorage', () => {
    // Arrange
    const FAKE_BASKET: any = [
      {
        id: 1,
        component: {
          id: 1,
          titel: 'string',
          link: 'string',
          images: 'string',
        },
        name: 'string',
        compound: 'string',
        weight: 'string',
        price: 1,
        images: 'string',
        count: 1,
      },
    ];
    spyOn(localStorage, 'getItem').and.callFake(() =>
      JSON.stringify(FAKE_BASKET)
    );
    localStorage.setItem('basket', JSON.stringify(FAKE_BASKET)); // Set the basket value in localStorage
    component.addToBasket();
    expect(component.basket).toEqual(FAKE_BASKET);
  });
});
