import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Ventana Modal';
  openModal: boolean = false
  constructor() { }

  clickOpenModal(): void {
    this.openModal = true
    
  }

  clickCloseModal(flag:boolean): void {
    flag? this.openModal = false: console.log(flag)
  }
  


}
