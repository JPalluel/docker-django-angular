import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Task } from '../task';

import { FormGroup, FormBuilder, Validators  } from '@angular/forms';// validators :error handling for the form

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> // $sign is a naming conventions for observables
  task_form: FormGroup;

  constructor(private ApiService: ApiService,  private form_builder: FormBuilder) { }

  ngOnInit(): void {
    this.getTasks();

    this.task_form = this.form_builder.group({
      title:'',
      content:''
    });

    //set validators for fields
    this.task_form.controls["title"].setValidators([Validators.required]);
    this.task_form.controls["content"].setValidators([Validators.required]);
  }

  public getTasks() {
    this.tasks$ = this.ApiService.getTasks();
  }

  onSubmit() {
    // Create the Task.
    this.ApiService.postTask(this.task_form.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }

    deleteTask(task_id: number) {
    this.ApiService.deleteTask(task_id)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }

    updateTask(task: any) {
    this.ApiService.putTask(task)
      .subscribe(
        (response) => {
          console.log(response);
          this.getTasks();
        }
      )
  }



}
