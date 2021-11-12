import { ListService } from './../../services/ListServices/list.service';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from 'src/app/Modal/add-task/add-task.component';
import { TaskService } from 'src/app/services/TaskServices/task.service';
import { list, task } from 'src/app/services/user';
import { Injectable } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-task-tables',
  templateUrl: './task-tables.component.html',
  styleUrls: ['./task-tables.component.scss']
})
export class TaskTablesComponent implements OnInit {
  panelOpenState = false;
  collapse: boolean = true;
  modalRef!: MdbModalRef<AddTaskComponent>;
  listData: list[] = [];
  listCounter: number = 0;
  taskData: task[] = [];

  constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    private modalService: MdbModalService,
    private listaDataname: ListService,
    private showTaskauth: TaskService
  ) {
    this.listaDataname.displayList().subscribe((response: any) => {
      this.listData = response;
      (this.listCounter = this.listData.length)
    });
    this.showTaskauth.showTask().subscribe((response: any) => {
      this.taskData = response;
    });
  }
  ngOnInit(): void {}
  open(content:string):void {
    this.modal.open(content, { centered: true, windowClass: 'my-class' });
  }

  // open modal for new list 
  openModal() {
    this.modalRef = this.modalService.open(AddTaskComponent, {
      modalClass: 'modal-dialog-centered',
    });
  }
}
