import { ListService } from '../../services/ListServices/list_service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {ToastrService} from "ngx-toastr";
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  newListtask!: FormGroup;
  constructor(
    public modalRef: MdbModalRef<AddTaskComponent>,
    private formBuilder: FormBuilder,
    private modalAuth: ListService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.newListtask = this.formBuilder.group({
      ListName: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.newListtask.valid) {
      this.modalAuth
        .createList(this.newListtask.value.ListName)
        .subscribe((response) => {
          window.location.reload();
        });
    } else {
    }
  }
  showToast(){
    this.toastr.success("List added successfully", "Added", {
      timeOut: 500,
    }) 
    }
}
