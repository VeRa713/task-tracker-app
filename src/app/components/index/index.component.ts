import { Component, OnInit } from '@angular/core';
import { TaskItem } from '../../models/task-item';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit{
taskItems: TaskItem[] = [];

  constructor(
    private taskService: TaskServiceService
  ) { }

  // called when component is initialized
  // async
  ngOnInit() : void {
    console.log("ngOnInit() fired for App.Component")

    this.taskService.getAllTasks().subscribe((taskItems) => {
      this.taskItems = taskItems
    })
  }

  formEventHandler = (payload: TaskItem) => {
    console.log("Handling formEventHandler...")
    console.log(payload)

    this.taskItems.push(payload)

    console.log(this.taskItems.length);
  }
}
