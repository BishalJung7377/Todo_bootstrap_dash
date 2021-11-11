import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTablesComponent } from './task-tables.component';

describe('TaskTablesComponent', () => {
  let component: TaskTablesComponent;
  let fixture: ComponentFixture<TaskTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
