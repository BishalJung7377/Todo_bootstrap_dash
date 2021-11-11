import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-date-section',
  templateUrl: './dash-date-section.component.html',
  styleUrls: ['./dash-date-section.component.scss']
})
export class DashDateSectionComponent implements OnInit {
  date =new Date().toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'})

  constructor() { }

  ngOnInit(): void {
  }

}
