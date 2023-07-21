import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoodsResponse } from 'src/app/shared/interfaces/goods';
import { GoodsService } from 'src/app/shared/services/goods/goods.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

@Component({
  selector: 'app-cood-info',
  templateUrl: './good-info.component.html',
  styleUrls: ['./good-info.component.css'],
})
export class CoodInfoComponent implements OnInit {
  public goodsData: GoodsResponse | undefined;
  public goodArr: Array<GoodsResponse> = [];

  constructor(
    private goodsService: GoodsService,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.goodsService.getOneGoods(id as string).subscribe((data) => {
        this.goodsData = data as GoodsResponse;
      });
    });
  }

  quantity_goods(good: GoodsResponse, value: boolean): void {
    if (value) {
      ++good.count;
    } else if (!value && good.count > 1) {
      --good.count;
    }
  }

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
  }
}
