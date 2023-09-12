import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent {
   @Output() colorEvent = new EventEmitter<string>();

   public addColorEvent(value: string){
        this.colorEvent.emit(value);
   }

}
