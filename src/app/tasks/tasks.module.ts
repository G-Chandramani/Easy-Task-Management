import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";


import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksComponent} from "./tasks.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations:[TasksComponent, TaskComponent, NewTaskComponent],
  exports:[TasksComponent],
  imports:[SharedModule, FormsModule, CommonModule],
})

export class TasksModule {

}
