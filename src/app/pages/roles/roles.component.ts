import { Component, OnInit, EventEmitter } from '@angular/core';
import { ComponentsResponse } from 'src/app/shared/interfaces/components';
import { GoodsResponse } from 'src/app/shared/interfaces/goods';
import { ComponentsService } from 'src/app/shared/services/comments/comments.service';
import { GoodsService } from 'src/app/shared/services/goods/goods.service';
import { OrderService } from 'src/app/shared/services/order/order.service';

const LIST: any[] = [
  { name: 'Всі', link: 'all' },
  { name: 'Філадельфія', link: 'Філадельфія' },
  { name: 'Каліфорнія', link: 'Каліфорнія' },
  { name: 'Запечені', link: 'Запечені' },
  { name: 'Фірмові', link: 'Фірмові' },
  { name: 'Макі', link: 'Макі' },
  { name: 'Праміум', link: 'Праміум' },
];

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  public updateBasket: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private commmpService: ComponentsService,
    private goodsService: GoodsService,
    private orderService: OrderService
  ) {}

  public listCommponenet: any[] = LIST;
  public getArr!: Array<ComponentsResponse>;
  public goodsArr!: Array<GoodsResponse>;
  public activeItem: any;
  public categoriName!: string;

  ngOnInit(): void {
    this.getCategory();
    this.getGood();
  }

  getCategory(): void {
    this.commmpService.getAll().subscribe((data) => {
      this.getArr = data as ComponentsResponse[];
    });
  }

  getGood(): void {
    this.goodsService.getAll().subscribe((data: GoodsResponse[]) => {
      this.goodsArr = data.filter((good: GoodsResponse) => {
        return (
          good.component &&
          good.component.link !== 'sauces' &&
          good.component.link !== 'drinks'
        );
      });
    });
  }

  getGoodst(): void {
    if (this.goodsArr) {
      this.goodsService.getAll().subscribe((data: GoodsResponse[]) => {
        this.goodsArr = data.filter(
          (good: GoodsResponse) =>
            good.component && good.component.titel === this.categoriName
        );
      });
    }
  }

  onSelectItem(component: ComponentsResponse): void {
    this.activeItem = component;
    this.categoriName = component.link;
    if (this.categoriName == 'all') {
      this.getGood();
    } else {
      this.getGoodst();
    }
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
    this.updateBasket.emit();
  }
}
