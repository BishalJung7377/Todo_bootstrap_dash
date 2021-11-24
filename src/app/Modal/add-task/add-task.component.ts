import { ListService } from '../../services/list-services/list_service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  newListtask!: FormGroup;
  constructor(
    public modalRef: MdbModalRef<AddTaskComponent>,
    private formBuilder: FormBuilder,
    private modalAuth: ListService,
    private toastr: ToastrService,
    private router: Router,
    public location: Location,
    public loaderService: LoaderService
  ) {
    this.newListtask = this.formBuilder.group({
      ListName: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}
  onSubmit(): void {
    if (this.newListtask.valid) {
      this.modalAuth
        .createList(this.newListtask.value.ListName)
        .subscribe((response) => {
          this.router
            .navigateByUrl('', { skipLocationChange: true })
            .then(() => {
              this.toastr.success('List added successfully', 'Added', {});
              this.router.navigate([decodeURI(this.location.path())]);
            });
        });
    } else {
      this.toastr.success('Error while adding data', 'Error', {});
    }
  }
}
