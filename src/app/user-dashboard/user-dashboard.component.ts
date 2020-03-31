import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnClick() : void {

    let token = localStorage.getItem("connect");
    let id = localStorage.getItem("id");


    localStorage.removeItem("id");
    localStorage.removeItem("connect");
    alert("Disconnected !");
    window.location.href = "/home";
  }

  ngOnInit(): void {
  }
}
