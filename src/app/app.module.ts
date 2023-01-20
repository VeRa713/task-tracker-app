import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { PrioritySelectComponent } from './priority-select/priority-select.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    HeaderComponent,
    FooterComponent,
    AddTaskFormComponent,
    PrioritySelectComponent,
    TeamSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
