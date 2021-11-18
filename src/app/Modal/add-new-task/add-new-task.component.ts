import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/task-services/task_service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {
  addnewTaskform!: FormGroup;
  formSubmit = false;
  startDate = new Date(2010, 0, 1);
  endDate = new Date(2020, 6, 16, 0, 0, 0, 0);

  constructor(
    public modalRef: MdbModalRef<AddNewTaskComponent>,
    private formBuilder: FormBuilder,
    private taskAuth: TaskService,
    private toastr: ToastrService,
    private router: Router,
    public location: Location
  ) {}
  ngOnInit(): void {
    this.initialize();
  }
  initialize(): void {
    this.addnewTaskform = this.formBuilder.group({
      taskName: ['', [Validators.required]],
      listName: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  get formValidation() {
    return this.addnewTaskform.controls;
  }

  onSubmit(): void {
    if (this.addnewTaskform.valid) {
      this.taskAuth
        .createTask(
          this.addnewTaskform.value.taskName,
          this.addnewTaskform.value.listName,
          this.addnewTaskform.value.priority,
          this.addnewTaskform.value.any
        )
        .subscribe((response) => {
          this.router
            .navigateByUrl('', { skipLocationChange: true })
            .then(() => {
              console.log(decodeURI(this.location.path()));
              this.router.navigate([decodeURI(this.location.path())]);
            });
        });
    } else {
      this.toastr.success('Error while adding data', 'Error', {
        timeOut: 500,
      });
    }
  }
  showToast(): void {
    this.toastr.success('Task Added Successfully', 'Task Added', {
      timeOut: 500,
    });
  }
}
