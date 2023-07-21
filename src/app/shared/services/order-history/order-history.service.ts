import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  DocumentReference,
  Firestore,
  query,
  where
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { OrderResponse } from "../../interfaces/order";

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private orderCollection: string = 'order-history';

  constructor(private afs: Firestore) {}

  getAllByEmail(email: string): Observable<Array<OrderResponse>> {
    const q = query(collection(this.afs, this.orderCollection), where('email', '==', email));
    return collectionData(q, {
      idField: 'id',
    }) as Observable<Array<OrderResponse>>;
  }

  addOrder(orderHistory: any): Promise<DocumentReference> {
    return addDoc(collection(this.afs, this.orderCollection), orderHistory);
  }
}
