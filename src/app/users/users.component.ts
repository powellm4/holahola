import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data=> this.users$ = data
    )
    
  }

}
