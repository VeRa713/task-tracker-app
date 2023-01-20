import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../models/task-item';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})

export class AddTaskFormComponent {
  priorityId : number
  teamId: number

  @Input() taskItem: TaskItem = {
    id: 0,
    task_name: "",
    status: 0,
    priority: 0,
    desc: "",
    team_id: 0
  }

  @Output() formEvent: EventEmitter<TaskItem> = new EventEmitter<TaskItem>();

  setPriorityId = (payload: any) => {
    this.priorityId = Number(payload.id)
  }

  setTeamId = (payload: any) => {
    console.log(payload)
    this.teamId = Number(payload.id)
  }

  btnAddTask = () => {
    console.log("Saving task...");
    console.log(this.taskItem)

    let o = { ...this.taskItem }

    o.team_id = this.teamId
    o.priority = this.priorityId

    this.formEvent.emit(o)

    console.log(o)
  }

  btnClear = () => {
    this.taskItem.id = undefined;
    this.taskItem.task_name = ''
    // reset Team
    // reset Priority
    this.taskItem.priority = 0
    this.taskItem.desc = ''
  }
}
