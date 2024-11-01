import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Adres API backendu

  constructor(private http: HttpClient) {}

  sendEmail(formData: {
    firstName: string;
    lastName: string;
    phoneNum: string;
    email: string;
    userText: string;
  }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
