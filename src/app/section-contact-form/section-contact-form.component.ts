import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { EmailService } from '../services/email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-contact-form.component.html',
  styleUrl: './section-contact-form.component.scss',
})
export class SectionContactFormComponent {
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNum: new FormControl(''),
    email: new FormControl(''),
    userText: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  submitForm() {
    console.log(this.applyForm.value);
    this.http
      .post('http://localhost:3000/send-email', this.applyForm.value)
      .subscribe(
        (response) => {
          console.log('Form data sent successfully!', response);
        },
        (error) => {
          console.error('Error sending form data', error);
        }
      );
    this.applyForm.reset();
  }
}
