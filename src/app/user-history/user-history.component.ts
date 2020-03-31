import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.scss']
})
export class UserHistoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];

  removeEpisode(event) : void {
    let token = localStorage.getItem('connect');
    
    this.http.delete("https://api.betaseries.com/episodes/watched?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {
      
      let token = localStorage.getItem('connect');

      this.http.get("https://api.betaseries.com/episodes/unrated?key=13d4afd6c13a&token=" + token).subscribe
      ((data: any[]) => {
        this.arrayData = data["episodes"];
      })
    })

    
  }

  ngOnInit(): void {

    let token = localStorage.getItem('connect');

    this.http.get("https://api.betaseries.com/episodes/unrated?key=13d4afd6c13a&token=" + token).subscribe((data: any[]) => {
      this.arrayData = data["episodes"];
    })
  }
}
