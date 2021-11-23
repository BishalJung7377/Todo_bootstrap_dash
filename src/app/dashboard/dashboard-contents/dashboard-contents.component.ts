import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-dashboard-contents',
  templateUrl: './dashboard-contents.component.html',
  styleUrls: ['./dashboard-contents.component.scss'],
})
export class DashboardContentsComponent implements OnInit {
  constructor(
    public loaderService: LoaderService
  ) {}
  ngOnInit(): void {}
}
