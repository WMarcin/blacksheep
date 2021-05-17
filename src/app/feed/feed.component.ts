import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { Feed } from './feed';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  //@Input() feedDoc: AngularFirestoreDocument<Feed>;
  @Input() feed: Feed;

  losers = AppComponent.losers;
  //losers : Observable<any[]>; //['K8', 'Carla', 'M🐱'];

  //feed = new Feed('', '', '');

  constructor() {
    //this.feedDoc;
    //.get().pipe(map((v)=>this.feed = v.data()));
    //this.feed = this.feedDoc.valueChanges();
    //this.losers = AppComponent.losers;
  }

  update(feed: Feed) {
    //this.feedDoc.update(feed);
  }

  ngOnInit() {}
}
