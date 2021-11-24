import { ListService } from '../../services/list-services/list_service';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from 'src/app/Modal/add-task/add-task.component';
import { TaskService } from 'src/app/services/task-services/task_service';
import { list, task } from 'src/app/services/user';
import { Injectable } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-tables',    
  templateUrl: './task-tables.component.html',
  styleUrls: ['./task-tables.component.scss'],
})
export class TaskTablesComponent implements OnInit {
  panelOpenState = false;
  collapse: boolean = true;
  modalRef!: MdbModalRef<AddTaskComponent>;
  listData: list[] = [];
  listCounter: number = 0;
  taskData: task[] = [];
  dataRefresher: any;
  lengthOflist: number | any = [];
  task: any;
  taskCounter: number = 0;
  counter: number = 0;
  totalValue: number = 0;
  constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    private modalService: MdbModalService,
    private listaDataname: ListService,
    private showTaskauth: TaskService,
    private router: Router,
    public location: Location,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getapiData();
  }
  open(content: string): void {
    this.modal.open(content, {
      centered: true,
      windowClass: 'my-class',
      size: 'lg',
    });
  }
  getapiData() {
    this.showTaskauth.showTask().subscribe((response: any) => {
      this.taskData = response;
      this.taskCounter = this.taskData.length;
      this.listaDataname.displayList().subscribe((response: any) => {
        this.listData = response;
        this.listCounter = this.listData.length;
        for (let list of this.listData) {
          this.totalValue = 0;
          for (let task of this.taskData) {
            this.counter = 0;
            if (list.ListName === task.ListName) {
              this.counter++;
            }
            this.totalValue = this.totalValue + this.counter;
          }
          this.lengthOflist.push(this.totalValue);
        }
      });
    });
  }
  // open modal for new list
  openModal(): void {
    this.modalRef = this.modalService.open(AddTaskComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
  taskSelected(tasksList: any) {
    tasksList.status = true;
    this.showTaskauth.completedTask(tasksList).subscribe((status) => {
      this.toastr.success('Task Deleted Successfully', 'Delete', {});
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate([decodeURI(this.location.path())]);
      });
    });
  }
}
