import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginResponse } from 'src/app/shared/interfaces/accoumt';
import { ComponentsResponse } from 'src/app/shared/interfaces/components';
import { GoodsResponse } from 'src/app/shared/interfaces/goods';
import { OrderResponse } from 'src/app/shared/interfaces/order';
import { ComponentsService } from 'src/app/shared/services/comments/comments.service';
import { GoodsService } from 'src/app/shared/services/goods/goods.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-goods-page',
  templateUrl: './goods-page.component.html',
  styleUrls: ['./goods-page.component.scss'],
})
export class GoodsPageComponent implements OnInit {
  public goddsList!: Array<GoodsResponse>;
  private goodsArr!: Array<GoodsResponse>;
  private eventSubscription!: Subscription;
  public categoriName = '';
  public updateBasket: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private gooService: GoodsService,
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.eventSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getGood();
      }
    });
  }

  ngOnInit(): void {}

  getGood(): void {
    this.gooService.getAll().subscribe((data) => {
      this.goodsArr = data as GoodsResponse[];
      this.getGoodst();
    });
  }

  getGoodst(): void {
    this.categoriName = this.activatedRoute.snapshot.paramMap.get(
      'linnk'
    ) as string;
    this.goddsList = this.goodsArr.filter(
      (good: GoodsResponse) => good?.component?.titel === this.categoriName
    );
  }

  /*---------------Додавання товару----------------*/
  quantity_goods(good: GoodsResponse, value: boolean): void {
    if (value) {
      ++good.count;
    } else if (!value && good.count > 1) {
      --good.count;
    }
  }

  /*---------------Локал сторадж та корзинау----------------*/
  addToBasket(goods: GoodsResponse): void {
    let basket: Array<GoodsResponse> = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket') as string);
      if (basket.some((good) => good.id === goods.id)) {
        const index = basket.findIndex((good) => good.id === goods.id);
        basket[index].count += goods.count;
      } else {
        basket.push(goods);
      }
    } else {
      basket.push(goods);
    }
    localStorage.setItem('basket', JSON.stringify(basket));
    goods.count = 1;
    this.orderService.chageBasket.next(true);
    this.updateBasket.emit();
  }
}
