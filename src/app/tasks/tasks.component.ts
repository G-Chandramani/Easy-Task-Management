import {Component, Input} from '@angular/core';
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) userId!: string;
  @Input({required:true}) name!: string;
  isAddTask = false;

  constructor(private taskService: TasksService) { }

  get selectedUserTasks(){
    return this.taskService.getUserTask(this.userId)
  }


  onAddTask(){
    this.isAddTask = true;
  }

  onCloseAddTask(){
    this.isAddTask = false;
  }

}
