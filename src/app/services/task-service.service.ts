import { Injectable, Output, EventEmitter } from '@angular/core';
import { TaskItem } from '../models/task-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  baseUrl: string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  getAllTasks = () : Observable<TaskItem[]> => {
    let tasks: Observable<TaskItem[]>

    tasks = this.http.get<TaskItem[]>(`${this.baseUrl}/tasks`, httpOptions)

    return tasks
  }

  getById = (id: number) : Observable<TaskItem> => {
    let task : Observable<TaskItem>

    task = this.http.get<TaskItem>(`${this.baseUrl}/tasks/${id}`, httpOptions)

    return task
  }

  addTask = () : void => {
    //transfer add task button functionality here from add-task-form ts
  }

  // @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>()

  deleteTask = (task_name: String) : void => {
    console.log("Task Service called")
    console.log("Deleting "+ task_name + "...")
    //get taskItem.id
    //find taskItem.id
    //delete task
  }

  editTask = (task_name: String) : void => {
    //get taskItem.id
    //edit taskItem.id
  }
}
