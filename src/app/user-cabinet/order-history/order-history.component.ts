import { Component, OnInit } from '@angular/core';
import { OrderResponse } from "../../shared/interfaces/order";
import { Storage } from "@angular/fire/storage";
import { OrderHistoryService } from "../../shared/services/order-history/order-history.service";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  public userOrder: Array<OrderResponse> = [];
  public goodArr: Array<any> = [];

  constructor(
    private orderHistoryService: OrderHistoryService,
    private storage: Storage
) { }

  ngOnInit(): void {
    this.getOrderHistory();
  }

  getOrderHistory() {
    const user = JSON.parse(localStorage.getItem('curentUser') as string);
    const email = user.email;
    console.log(email);
    this.orderHistoryService.getAllByEmail(email).subscribe((data) => {
      this.userOrder = data;
      this.goodArr = this.userOrder.flatMap(order => order.order);
      console.log(this.goodArr);
    });
  }
}
