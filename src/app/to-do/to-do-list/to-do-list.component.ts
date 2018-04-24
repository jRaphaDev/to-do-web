import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/to-do';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  public list: ToDo[];
  public subscription: ISubscription;

  public checked: boolean = false;
  public panelOpenState: boolean = false;

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.subscription = this.toDoService.getTasks()
      .subscribe(data => this.list = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
