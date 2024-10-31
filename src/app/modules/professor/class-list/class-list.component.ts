import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClassService } from '../../../core/services/class.service';
import { Class } from '../../../core/models/types';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classes: Class[] = [];
  showAddForm = false;
  classForm: FormGroup;

  constructor(
    private classService: ClassService,
    private fb: FormBuilder
  ) {
    this.classForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      schedule: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadClasses();
  }

  loadClasses() {
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

  onSubmit() {
    if (this.classForm.valid) {
      this.classService.addClass(this.classForm.value).subscribe({
        next: () => {
          this.loadClasses();
          this.showAddForm = false;
          this.classForm.reset();
        },
        error: (error) => {
          console.error('Error adding class:', error);
        }
      });
    }
  }
}
