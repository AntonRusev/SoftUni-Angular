import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent{

  @Input() user!: { firstName: string, age: number};
  @Input() showAge!: boolean;

  constructor() { }

}
