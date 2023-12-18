import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'RICK_MORTY_API';

  data: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

}
