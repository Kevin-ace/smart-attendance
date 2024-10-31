import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AttendanceRecord } from '../models/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private http: HttpClient) {}

  getAttendanceRecords(classId: string): Observable<AttendanceRecord[]> {
    // TODO: Replace with actual API call
    return of([
      {
        id: '1',
        classId: '1',
        date: '2024-03-15',
        presentCount: 40,
        absentCount: 5,
        students: [
          { studentId: '1', name: 'John Doe', status: 'present', timestamp: '2024-03-15T10:05:00' }
        ]
      }
    ]);
  }

  generateQRCode(classId: string, duration: number): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/attendance/qr`, { classId, duration });
  }
}