import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  parametres = {};

  login(form: NgForm) {
    let user = form.value.user;
    let password = form.value.password;
    password = Md5.hashStr(password);

    this.parametres = {
      'login' : user,
      'password' : password
    };

    this.http.post("https://api.betaseries.com/members/auth?key=13d4afd6c13a", this.parametres ).subscribe(
      (data) => {
        let user = data['token'];
        let id = data['user'].id;
        let login = data['user']['login'];
        localStorage.setItem("connect", user);
        localStorage.setItem("id", id);
        alert('Welcome ' + login + " !");
        window.location.href = '/dashboard';
      },
      (error) => {
        alert('Login or password incorrect !');
      }
    )}

  ngOnInit(): void {
    
  }

}
