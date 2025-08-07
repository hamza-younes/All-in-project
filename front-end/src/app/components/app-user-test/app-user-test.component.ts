import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-app-user-test',
  standalone: true,
  imports: [],
  templateUrl: './app-user-test.component.html',
  styleUrl: './app-user-test.component.css'
})
export class AppUserTestComponent {

   constructor(private http: HttpClient) {}

  testApi() {
    this.http.get('http://localhost:5285/api/Users').subscribe({
      next: (res) => console.log('✅ Success:', res),
      error: (err) => console.error('❌ Error:', err)
    });
  }

}
