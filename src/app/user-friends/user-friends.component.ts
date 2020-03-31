import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-friends',
  templateUrl: './user-friends.component.html',
  styleUrls: ['./user-friends.component.scss']
})
export class UserFriendsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];
  arrayBlocked = [];
  arraySend = [];
  arrayReceive = [];

  removeFriend(event) : void {
    let token = localStorage.getItem('connect');
    
    this.http.delete("https://api.betaseries.com/friends/friend?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {
      
      let token = localStorage.getItem('connect');

      this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token).subscribe
      ((data: any[]) => {
        this.arrayData = data["users"];
      })
    })
  }

  blockFriend(event) : void {
    let token = localStorage.getItem('connect');
    
    let params = {
      'token' : token,
      'id' : event
    };

    this.http.post("https://api.betaseries.com/friends/block?key=13d4afd6c13a", params).subscribe((response) => {
      
      let token = localStorage.getItem('connect');

      this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token).subscribe
      ((data: any[]) => {
        this.arrayData = data["users"];
      })

      this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token + "&blocked=true").subscribe((data: any[]) => {
      this.arrayBlocked = data["users"];
    })
    })
  }

  deblockFriend(event) : void {
    let token = localStorage.getItem('connect');
    
    this.http.delete("https://api.betaseries.com/friends/block?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {

      let token = localStorage.getItem('connect');

      this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token).subscribe
      ((data: any[]) => {
          this.arrayData = data["users"];
      })

      this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token + "&blocked=true").subscribe((data: any[]) => {
        this.arrayBlocked = data["users"];
      })
    })
  }

  deblockAddFriend(event) : void {
    let token = localStorage.getItem('connect');
    
    this.http.delete("https://api.betaseries.com/friends/block?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {

    let token = localStorage.getItem('connect');
      let params = {
        'id' : event,
        'token' : token
      };

      this.http.post("https://api.betaseries.com/friends/friend?key=13d4afd6c13a", params).subscribe
      ((data: any[]) => {

        this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token).subscribe
        ((data: any[]) => {
          this.arrayData = data["users"];
        })

        this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token + "&blocked=true").subscribe((data: any[]) => {
        this.arrayBlocked = data["users"];
        })
      })
    })
  }

  ngOnInit(): void {

    let token = localStorage.getItem('connect');

    this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token).subscribe((data: any[]) => {
      this.arrayData = data["users"];
    })

    this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token + "&blocked=true").subscribe((data: any[]) => {
      this.arrayBlocked = data["users"];
    })

    this.http.get("https://api.betaseries.com/friends/requests?key=13d4afd6c13a&token=" + token).subscribe((data: any[]) => {
      this.arraySend = data["users"];
    })

    this.http.get("https://api.betaseries.com/friends/list?key=13d4afd6c13a&token=" + token + "&received").subscribe((data: any[]) => {
      this.arrayReceive = data["users"];
    })

  }

}
