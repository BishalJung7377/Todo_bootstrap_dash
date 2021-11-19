import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { TaskService } from 'src/app/services/task-services/task_service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListService } from 'src/app/services/list-services/list_service';
import { list } from 'src/app/services/user';

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
  panelOpenState = false;
  collapse: boolean = true;
  listData: list[] = [];
  constructor(
    public modalRef: MdbModalRef<AddNewTaskComponent>,
    private formBuilder: FormBuilder,
    private taskAuth: TaskService,
    private toastr: ToastrService,
    private router: Router,
    public location: Location,
    private listaDataname: ListService,
    private modalAuth: ListService
  ) {}
  ngOnInit(): void {
    this.initialize();
    this.getLists();
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
              this.router.navigate([decodeURI(this.location.path())]);
            });
        });
    } else {
      this.toastr.success('Error while adding data', 'Error', {});
    }
  }
  showToast(): void {
    this.toastr.success('Task Added Successfully', 'Task Added', {});
  }
  getLists() {
    this.listaDataname.displayList().subscribe((response: any) => {
      this.listData = response;
      console.log('ASdasdsadsad' + this.listData);
    });
  }
  taskSubmit(): void {
    // if (this.addnewTaskform.valid) {
    //   this.modalAuth
    //     .createList(this.addnewTaskform.value.listName)
    //     .subscribe((response) => {
    //       this.router
    //         .navigateByUrl('', { skipLocationChange: true })
    //         .then(() => {
    //           this.router.navigate([decodeURI(this.location.path())]);
    //         });
    //     });
    // } else {
    //   this.toastr.success('Error while adding data', 'Error', {});
    // }
  }
}
