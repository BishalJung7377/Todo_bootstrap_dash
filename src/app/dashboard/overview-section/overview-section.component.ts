import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list-services/list_service';
import { TaskService } from 'src/app/services/task-services/task_service';
import { list, task } from 'src/app/services/user';

@Component({
  selector: 'app-overview-section',
  templateUrl: './overview-section.component.html',
  styleUrls: ['./overview-section.component.scss'],
})
export class OverviewSectionComponent implements OnInit {
  listData: list[] = [];
  taskData: task[] = [];
  listCounter: number = 0;
  taskCounter: number = 0;
  constructor(
    private listaDataname: ListService,
    private showTaskauth: TaskService
  ) {}
  ngOnInit(): void {
    this.getapiData();
  }

  getapiData(): void {
    this.showTaskauth.showTask().subscribe((response: any) => {
      this.taskData = response;
      this.taskCounter = this.taskData.length;
    });
  }
}
