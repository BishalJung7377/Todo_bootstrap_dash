import { AddNewTaskComponent } from 'src/app/Modal/add-new-task/add-new-task.component';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from 'src/app/Modal/add-task/add-task.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/task-services/task_service';
@Component({
  selector: 'app-dash-date-section',
  templateUrl: './dash-date-section.component.html',
  styleUrls: ['./dash-date-section.component.scss'],
})
export class DashDateSectionComponent implements OnInit {
  date = new Date().toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  taskData: any = [];
  modalRef!: MdbModalRef<AddNewTaskComponent>;
  constructor(
    private modal: NgbModal,
    private modalService: MdbModalService,
    private showTaskAUth: TaskService
  ) {}
  ngOnInit(): void {
    this.showTaskAUth.showTask().subscribe((response: any) => {
      this.taskData = response;
    });
  }
  // open modal function
  openModal(): void {
    this.modalRef = this.modalService.open(AddNewTaskComponent, {
      modalClass: 'modal-dialog-centered modal-xl', 
    }, );
  }
}
