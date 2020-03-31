import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-infos-series',
  templateUrl: './infos-series.component.html',
  styleUrls: ['./infos-series.component.scss']
})
export class InfosSeriesComponent implements OnInit {

  arrayData = [];
  parametres = {};


  constructor(private http: HttpClient) {
  }


  List(): void {

    var id_chemin = document.location.href;
    id_chemin = id_chemin.substr(28);
    let formData = new FormData();
    let token = localStorage.getItem('connect');
    let id = localStorage.getItem('id');
    this.parametres = {
      
      'id': id_chemin,
      'token': token
    };
    formData.append("id", this.parametres['id']);
    formData.append("token", this.parametres['token'])


    if (token !== null && id !== null) {
      this.http.post("https://api.betaseries.com/shows/show?key=13d4afd6c13a", formData).subscribe((data) => {
      });
      alert("Add to your list");
    }

    else {
      alert("You have to sign in")
    }
  }

  Archive(): void {

    var id_chemin = document.location.href;
    id_chemin = id_chemin.substr(28);
    let formData = new FormData();
    let token = localStorage.getItem('connect');
    let id = localStorage.getItem('id');
    this.parametres = {
      'id': id_chemin,
      'token': token
    };

    formData.append("id", this.parametres['id']);
    formData.append("token", this.parametres['token']);

    if (token !== null && id !== null) {
      this.http.post("https://api.betaseries.com/shows/archive?key=13d4afd6c13a", formData).subscribe((data) => {
      });
      alert("Archive the show");
    }

    else {

      alert("You have to sign in")
    }
  }

  ngOnInit(): void {

    var id_chemin = document.location.href;
    id_chemin = id_chemin.substr(28);

    this.http.get("https://api.betaseries.com/shows/display?key=13d4afd6c13a&id=" + id_chemin).subscribe((data: any[]) => {
      this.arrayData = data['show'];
    })
  }
}
