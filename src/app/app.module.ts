import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShoppingComponent } from './shopping/shopping.component';

const environment = {
  production: false,
  firebase: {
  apiKey: "AIzaSyDvkSrOppeFgfoSplFvPSYFjT9PMe-WmYs",
  authDomain: "black-sheep-otaki.firebaseapp.com",
  databaseURL: "https://black-sheep-otaki-default-rtdb.firebaseio.com",
  projectId: "black-sheep-otaki",
  storageBucket: "black-sheep-otaki.appspot.com",
  messagingSenderId: "461621188363",
  appId: "1:461621188363:web:56dd237a45ed94a294b40e"
}
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  declarations: [AppComponent, HelloComponent, ShoppingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
