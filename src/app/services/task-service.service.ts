import { Injectable, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../models/task-item';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  deleteTask = (task_name: String) : void => {
    console.log("Task Service called")
    console.log("Deleting "+ task_name + "...")
    //get taskItem.id
    //find taskItem.id
    //delete task
  }

  editTask = (taskItem: TaskItem) : void => {
    //get taskItem.id
    //edit taskItem.id
  }

}
