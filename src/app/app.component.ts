import { Component, VERSION } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(firestore: AngularFirestore) {
  }
  name = '🐓'; //'Angular ' + VERSION.major;

}
