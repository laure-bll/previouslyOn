import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PreviouslyOn';


  constructor(private http: HttpClient) {
  }

  connection;
  token = localStorage.getItem("connect");


  ngOnInit(): void {
    if (this.token !== null) {
      this.connection = true;
    }

    else {
      this.connection = false;
    }

  }
}