import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyriamHaoyueTP1';
  allColor : string[] = ['red', 'green', 'blue', 'yellow'];
  colorShow : string  = '';

  public addItem(newItem : string){
    this.colorShow = newItem;

  }
}
