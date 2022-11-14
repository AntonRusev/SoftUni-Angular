import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent{
  test: number
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent{

  @Input() user!: { firstName: string, age: number};
  @Input() showAge!: boolean;

  @Output() custonEvent = new EventEmitter<ICustomEvent>();

  constructor() { }

  selectClickHandler($event: MouseEvent) {
    $event.stopPropagation();
    this.custonEvent.emit({test: 123})
  }
}
