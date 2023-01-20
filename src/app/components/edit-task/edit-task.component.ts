import { TaskServiceService } from './../../services/task-service.service';
import { TaskItem } from './../../models/task-item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit{
  id: number

  taskItem: TaskItem = {
    id: 0,
    task_name: '',
    status: 0,
    priority: 0,
    desc: '',
    team_id: 0
  }

  constructor(
    private route: ActivatedRoute,
    private TaskServiceService: TaskServiceService
  ) {}

  ngOnInit(): void {
    // get value from url
    this.id =  Number(this.route.snapshot.paramMap.get('id'))
    console.log(`EditComponent for id ${this.id}`)

    this.TaskServiceService.getById(this.id).subscribe((task) => {
      this.taskItem =  task
    })
  }
}
