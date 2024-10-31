import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessorRoutingModule } from './professor-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: ProfessorDashboardComponent
      },
      {
        path: 'attendance-report',
        component: AttendanceReportComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    QrGeneratorComponent,
    ClassListComponent,
    AttendanceReportComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfessorRoutingModule,
    SharedModule,
    NgxQRCodeModule
    RouterModule.forChild(routes)
  ]
})
export class ProfessorModule { }