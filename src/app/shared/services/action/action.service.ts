import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ActionRequest, ActionResponse } from '../../interfaces/action';
import { GoodsRequest, GoodsResponse } from '../../interfaces/goods';
import {
  addDoc,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { collection, DocumentData } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actionArr: Array<ActionResponse> = [];

  private actionCollectio!: CollectionReference<DocumentData>;
  constructor(private afs: Firestore) {
    this.actionCollectio = collection(this.afs, 'action');
  }

  getAll() {
    return collectionData(this.actionCollectio, {
      idField: 'id',
    }) as Observable<Array<ActionResponse>>;
  }

  addAction(action: GoodsRequest) {
    return addDoc(this.actionCollectio, action);
  }
  getOneAction(id: string) {
    const actionDocumentReference = doc(this.afs, `action/${id}`);
    return docData(actionDocumentReference, { idField: 'id' });
  }

  editAction(action: GoodsRequest, id: string) {
    const actionDocumentReference = doc(this.afs, `action/${id}`);
    return updateDoc(actionDocumentReference, { ...action });
  }

  delAction(id: string) {
    const actionDocumentReference = doc(this.afs, `action/${id}`);
    return deleteDoc(actionDocumentReference);
  }
}
