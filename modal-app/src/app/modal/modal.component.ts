import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() open:boolean = false
  @Output() close = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  closeModal():void {
    this.close.emit(true)
  }
}
