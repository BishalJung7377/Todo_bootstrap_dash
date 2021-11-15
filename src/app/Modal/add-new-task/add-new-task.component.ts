import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/TaskServices/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {
  TaskForm!: FormGroup;
  formSubmit = false;
  startDate = new Date(2010, 0, 1);
  endDate = new Date(2020, 6, 16, 0, 0, 0, 0);

  constructor(
    public modalRef: MdbModalRef<AddNewTaskComponent>,
    private formBuilder: FormBuilder,
    private taskAuth: TaskService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initialize();
  }
  initialize(): void {
    this.TaskForm = this.formBuilder.group({
      taskName: ['', [Validators.required]],
      listName: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }
  get formValidation() {
    return this.TaskForm.controls;
  }

  onSubmit() {
    if (this.TaskForm.valid) {
      this.taskAuth
        .createTask(
          this.TaskForm.value.taskName,
          this.TaskForm.value.listName,
          this.TaskForm.value.priority,
          this.TaskForm.value.date
        )
        .subscribe((response) => {
          window.location.reload();
        });
    } else {
    }
  }
  showToast() {
    this.toastr.success('Task Added Successfully', 'Task Added', {
      timeOut: 500,
    });
  }
}
