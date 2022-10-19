import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];
  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.taskObj = new Task();
    this.addTaskValue = '';
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTasks().subscribe(res=>{
      this.taskArr = res;
    }, err=>{
      alert("getAllTask error");
    })
  }

  addTask(){
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue='';
    }, err => {
      alert("addTask error");
    })
  }

  editTask(){
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe( res =>{
      this.ngOnInit();
    }, err => {
      alert("Edit Error");
    })
  }

  deleteTask(task1: Task){
    this.crudService.deleteTask(task1).subscribe( res =>{
      this.ngOnInit();
    }, err => {
      alert("Delete Error");
    })
  }

  change(task1: Task){
    this.taskObj = task1;
    this.editTaskValue = task1.task_name;
  }

}
