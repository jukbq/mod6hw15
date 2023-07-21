import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ComponentsResponse,
  CopmponentsRequest,
} from '../../interfaces/components';
import {
  Firestore,
  CollectionReference,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { DocumentData, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private commentsArr: Array<ComponentsResponse> = [];
  private categoryCollection!: CollectionReference<DocumentData>;

  constructor(private afs: Firestore) {
    this.categoryCollection = collection(this.afs, 'categories');
  }

  getAll() {
    return collectionData(this.categoryCollection, { idField: 'id' });
  }

  getAllCategories(name: string) {
    return collectionData(this.categoryCollection, { idField: 'name' });
  }

  addCategory(category: CopmponentsRequest) {
    return addDoc(this.categoryCollection, category);
  }

  editCategory(category: CopmponentsRequest, id: string) {
    const catrgoryDocumentReference = doc(this.afs, `categories/${id}`);
    return updateDoc(catrgoryDocumentReference, { ...category });
  }

  delCategory(id: string) {
    const goodsDocumentReference = doc(this.afs, `categories/${id}`);
    return deleteDoc(goodsDocumentReference);
  }
}
