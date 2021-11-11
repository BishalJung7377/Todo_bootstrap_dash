import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashDateSectionComponent } from './dashboard/dash-date-section/dash-date-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { OverviewSectionComponent } from './dashboard/overview-section/overview-section.component';
import { TaskTablesComponent } from './dashboard/task-tables/task-tables.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth_gaurd/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServiceService } from './services/interceptor-service.service';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from "@angular/material/button"
import {MatSliderModule} from "@angular/material/slider";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardContentsComponent } from './dashboard/dashboard-contents/dashboard-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashDateSectionComponent,
    OverviewSectionComponent,
    TaskTablesComponent,
    LoginComponent,
    DashboardContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDividerModule,
    RouterModule,

    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
 
  ],
  providers: [AuthGuard, {
    provide:HTTP_INTERCEPTORS, useClass: InterceptorServiceService, multi: true
  },
  MatDatepickerModule,
    MatNativeDateModule 
],
  bootstrap: [AppComponent]
})
export class AppModule { }
