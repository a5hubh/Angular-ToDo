import { Component } from '@angular/core';
import { Model } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Shubham';
  UModel = new Model();

  getName() {
    return this.UModel.user;
  }
  
  getToDoItems() {
    return this.UModel.items;
  }
}


