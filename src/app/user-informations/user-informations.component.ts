import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-informations',
  templateUrl: './user-informations.component.html',
  styleUrls: ['./user-informations.component.scss']
})
export class UserInformationsComponent implements OnInit {

  arrayEmail = [];
  arrayUser = [];
  arrayAvatar =  [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    let token = localStorage.getItem("connect");

    this.http.get("https://api.betaseries.com/members/infos?key=13d4afd6c13a&token=" + token).subscribe((data: any[]) => {
      this.arrayUser.push(data['member']['login']);
      this.arrayAvatar.push(data['member']['avatar']);
    })

    this.http.get("https://api.betaseries.com/members/email?key=13d4afd6c13a&token=" + token).subscribe((data: any[]) => {
      this.arrayEmail.push(data['email']);
    })
  }
}