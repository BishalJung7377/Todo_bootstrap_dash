import { AddNewTaskComponent } from 'src/app/Modal/add-new-task/add-new-task.component';
import { FormBuilder } from '@angular/forms';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from 'src/app/Modal/add-task/add-task.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-dash-date-section',
  templateUrl: './dash-date-section.component.html',
  styleUrls: ['./dash-date-section.component.scss']
})
export class DashDateSectionComponent implements OnInit {
  date = new Date().toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  modalRef!: MdbModalRef<AddNewTaskComponent>;
  constructor(
    private formBuilder: FormBuilder,
    config: NgbModalConfig,
    private modal: NgbModal,
    private _modalService: NgbModal,
    // private modalService: MdbModalService
  ) {}
  ngOnInit(): void {}

  // open modal function 
  openModal() {
    // this.modalRef = this.modalService.open(AddNewTaskComponent, {
    //   modalClass: 'modal-dialog-centered',
    // });
  }
}
