import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'qr-generator', component: QrGeneratorComponent },
      { path: 'classes', component: ClassListComponent },
      { path: 'attendance', component: AttendanceReportComponent },
      { path: '', redirectTo: 'classes', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }