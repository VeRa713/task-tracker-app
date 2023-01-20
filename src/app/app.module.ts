import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { PrioritySelectComponent } from './priority-select/priority-select.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { IndexComponent } from './components/index/index.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'edit-task/:id', component: EditTaskComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    HeaderComponent,
    FooterComponent,
    AddTaskFormComponent,
    PrioritySelectComponent,
    TeamSelectComponent,
    IndexComponent,
    RegisterUserComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
