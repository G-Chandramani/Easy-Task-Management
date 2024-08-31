import {Component, EventEmitter, inject, Output, Input} from '@angular/core';

import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})

export class NewTaskComponent {

  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredtitle = '';
  enteredsummary = '';
  entereddate = '';
  private tasksService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredtitle,
      summary: this.enteredsummary,
      date: this.entereddate,
    }, this.userId);
    this.close.emit();
  }

}
