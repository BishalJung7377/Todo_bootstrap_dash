import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDateSectionComponent } from './dash-date-section.component';

describe('DashDateSectionComponent', () => {
  let component: DashDateSectionComponent;
  let fixture: ComponentFixture<DashDateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDateSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
