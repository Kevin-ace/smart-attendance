import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss']
})
export class QrGeneratorComponent implements OnInit {
  qrForm: FormGroup;
  qrData: string = '';
  showQR: boolean = false;

  constructor(private fb: FormBuilder) {
    this.qrForm = this.fb.group({
      classId: ['', Validators.required],
      duration: ['15', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {}

  generateQR() {
    if (this.qrForm.valid) {
      const { classId, duration } = this.qrForm.value;
      const timestamp = new Date().getTime();
      this.qrData = JSON.stringify({
        classId,
        duration,
        timestamp,
        // Add a secret key or hash here for security
      });
      this.showQR = true;
    }
  }
}