import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../../core/services/attendance.service';
import { AttendanceRecord } from '../../../core/models/types';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.scss']
})
export class AttendanceReportComponent implements OnInit {
  classId: string = '';
  attendanceRecords: AttendanceRecord[] = [];
  selectedDate: AttendanceRecord | null = null;

  constructor(
    private route: ActivatedRoute,
    private attendanceService: AttendanceService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.classId = params['classId'];
      if (this.classId) {
        this.loadAttendance();
      }
    });
  }

  loadAttendance() {
    this.attendanceService.getAttendanceRecords(this.classId).subscribe(records => {
      this.attendanceRecords = records;
    });
  }

  selectDate(record: AttendanceRecord) {
    this.selectedDate = record;
  }
}