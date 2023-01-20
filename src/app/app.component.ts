import { Component } from '@angular/core';
import { TaskItem } from './models/task-item';
import { TaskServiceService } from './services/task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  taskItems: TaskItem[] = [];

  constructor(private taskService: TaskServiceService) { }

  formEventHandler = (payload: TaskItem) => {
    console.log("Handling formEventHandler...")
    console.log(payload)

    this.taskItems.push(payload)

    console.log(this.taskItems.length);
  }
}
