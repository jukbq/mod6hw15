import { Component, OnInit } from '@angular/core';
import {
  Storage,
} from '@angular/fire/storage';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { OrderResponse } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public userOrder: Array<OrderResponse> = [];
  public goodArr: Array<any> = [];

  constructor(private orderService: OrderService, private storsge: Storage) {}

  ngOnInit(): void {
    this.getOrdert();
  }
  getOrdert(): void {
    this.orderService.getAll().subscribe((data) => {
      this.userOrder = data;
      this.getGoodArr();
    });
  }
  getGoodArr() {
    let arr = [];
    arr.push(this.userOrder.map((vla) => vla.order));
    this.goodArr = arr[0];
    console.log(this.goodArr);
  }

  delGood(index: OrderResponse) {
    this.orderService.delOrder(index.id.toString()).then(() => {
      this.getOrdert();
    });
  }
}
