import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Feed } from './feed/feed';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static losers: Observable<any[]>;
  feeds: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    AppComponent.losers = firestore.collection('losers').valueChanges();
    this.feeds = firestore.collection('feeds').valueChanges();
  }
  name = '🐓'; //'Angular ' + VERSION.major;
  /*feeds = [
    new Feed('monday', 'am1'),
    new Feed('monday', 'am2'),
    new Feed('monday', 'am3'),
    new Feed('monday', 'pm1'),
    new Feed('monday', 'pm2'),
    new Feed('monday', 'pm3')
  ];*/
}
