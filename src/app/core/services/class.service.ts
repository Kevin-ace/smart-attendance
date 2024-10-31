import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Class } from '../models/types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private http: HttpClient) {}

  getClasses(): Observable<Class[]> {
    // TODO: Replace with actual API call
    return of([
      {
        id: '1',
        name: 'Mathematics 101',
        code: 'MATH101',
        schedule: 'Mon, Wed 10:00 AM',
        totalStudents: 45
      },
      {
        id: '2',
        name: 'Physics 201',
        code: 'PHY201',
        schedule: 'Tue, Thu 2:00 PM',
        totalStudents: 38
      }
    ]);
  }

  addClass(classData: Partial<Class>): Observable<Class> {
    return this.http.post<Class>(`${environment.apiUrl}/classes`, classData);
  }
}