import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];

  addEpisode(event) {
    let token = localStorage.getItem('connect');

    let params = {
      'id' : event,
      'token' : token,
      'bulk' : false
    };

    if (token !== null) {
      this.http.post("https://api.betaseries.com/episodes/watched?key=13d4afd6c13a", params).subscribe
      ((response) => {
        let id_chemin = document.location.href;
        id_chemin = id_chemin.substr(31);
        let token = localStorage.getItem('connect');
        
        this.http.get("https://api.betaseries.com/shows/episodes?key=13d4afd6c13a&id=" + id_chemin + "&token=" + token).subscribe((data: any[]) => {
        this.arrayData = data["episodes"];
      })
      })
    }
    
    else {
      alert("You have to sign in to add an episode!")
    }


  }

  addPrecedentEpisodes(event) {
    let token = localStorage.getItem('connect');

    let params = {
      'id' : event,
      'token' : token,
      'bulk' : true
    };

    if (token !== null) {
      this.http.post("https://api.betaseries.com/episodes/watched?key=13d4afd6c13a", params).subscribe
      ((response) => {
        let id_chemin = document.location.href;
        id_chemin = id_chemin.substr(31);
        
        this.http.get("https://api.betaseries.com/shows/episodes?key=13d4afd6c13a&id=" + id_chemin + "&token=" + token).subscribe((data: any[]) => {
          this.arrayData = data["episodes"];
        })
      })
    }
    
    else {
      alert("You have to sign in to add episodes!")
    }
  }

  removeEpisode(event) : void {
    let token = localStorage.getItem('connect');

    if (token !== null) {
      this.http.delete("https://api.betaseries.com/episodes/watched?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {
        let id_chemin = document.location.href;
        id_chemin = id_chemin.substr(31);
        
        this.http.get("https://api.betaseries.com/shows/episodes?key=13d4afd6c13a&id=" + id_chemin  + "&token=" + token).subscribe((data: any[]) => {
        this.arrayData = data["episodes"];
      })
      })
    }
    
    else {
      alert("You have to sign in to remove an episode!")
    }
    

    this.http.delete("https://api.betaseries.com/episodes/watched?key=13d4afd6c13a&token=" + token + "&id=" + event).subscribe((response) => {
      let id_chemin = document.location.href;
      id_chemin = id_chemin.substr(31);

      alert("Removed from history");
      
      this.http.get("https://api.betaseries.com/shows/episodes?key=13d4afd6c13a&id=" + id_chemin).subscribe((data: any[]) => {
      this.arrayData = data["episodes"];
    })
    })
  }

  ngOnInit(): void {
    let id_chemin = document.location.href;
    id_chemin = id_chemin.substr(31);
    let token = localStorage.getItem('connect');
    
    this.http.get("https://api.betaseries.com/shows/episodes?key=13d4afd6c13a&id=" + id_chemin + "&token=" + token).subscribe((data: any[]) => {
      this.arrayData = data["episodes"];
    })
  }
}
