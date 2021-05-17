import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {
  shopping: Observable<any[]>;
  collection: AngularFirestoreCollection<unknown>;

  edit = false;

  constructor(firestore: AngularFirestore) {
    this.collection = firestore.collection('shopping');
    this.shopping = this.collection   
      .valueChanges({ idField: '_id' });
  }

  add(item) {
    this.collection
      .doc(item._id)
      .update({ buy: true });
  }

  remove(item) {
    this.collection
      .doc(item._id)
      .update({ buy: false });
  }

  ngOnInit() {}
}
