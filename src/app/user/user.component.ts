import {Component, EventEmitter, Input, Output} from '@angular/core';

import{type User} from './user.model'

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required:true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // Below Code is using signals and the above code is using decorators working is same with both codes.
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
