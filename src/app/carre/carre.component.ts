import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.scss']
})
export class CarreComponent {
  @Output() colorEvent = new EventEmitter<string>();
  @Input() colorChange : string[] = [];

  public addColorEvent(value: string){
    console.log(value);
    this.colorEvent.emit(value);
  }

}
