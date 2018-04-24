import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ToDo } from './to-do';

@Injectable()
export class ToDoService {

  private list: ToDo[];

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get('http://localhost:3001/to-do')
      .map(res => res.json())
  }

}
