export interface Class {
    id: string;
    name: string;
    code: string;
    schedule: string;
    totalStudents: number;
  }
  
  export interface AttendanceRecord {
    id: string;
    classId: string;
    date: string;
    presentCount: number;
    absentCount: number;
    students: StudentAttendance[];
  }
  
  export interface StudentAttendance {
    studentId: string;
    name: string;
    status: 'present' | 'absent';
    timestamp?: string;
  }