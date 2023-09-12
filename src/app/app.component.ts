import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyriamHaoyueTP1';
  color : string | undefined;

  public addItem(newItem : string){
     this.color = newItem;
  }
}
