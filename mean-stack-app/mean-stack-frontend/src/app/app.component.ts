import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
  message = 'Loading...';
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getMessage().subscribe(data => this.message = data);
  }
}

