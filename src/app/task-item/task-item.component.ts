import { TaskItem } from './../models/task-item';
import { Component, Input } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})

export class TaskItemComponent {
  @Input() taskItem: TaskItem

  constructor(private taskService: TaskServiceService) { }

  handleDelete(task_name: String): void {
    console.log("Delete button clicked...")

    this.taskService.deleteTask(task_name)
  }
}
