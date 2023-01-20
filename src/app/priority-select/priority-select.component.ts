import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Priority } from '../models/priority';

@Component({
  selector: 'app-priority-select',
  templateUrl: './priority-select.component.html',
  styleUrls: ['./priority-select.component.scss']
})

export class PrioritySelectComponent {

  @Input() priority: Priority;

  @Output() prioritySelectedEvent : EventEmitter<any> = new EventEmitter<any>()

  priorities : Priority[] = [
    {
      id: 1,
      priorityType: "Low"
    },
    {
      id: 2,
      priorityType: "Medium"
    },
    {
      id: 3,
      priorityType: "High"
    }
  ]

  handlerPriority = (payload: any) => {
    let priority_id = payload.target.value
    this.prioritySelectedEvent.emit({ id: priority_id })
  }
}
