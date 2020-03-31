import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];
  parametres = {};
  id;

  Delete(id_chemin): void {

    this.id = id_chemin
    let token = localStorage.getItem('connect');
    this.parametres = {
      'id': this.id,
      'token': token
    };

    this.http.delete("https://api.betaseries.com/shows/favorite?key=13d4afd6c13a&id=" + this.id + "&token=" + token).subscribe((data) => {

      window.location.href = '/myfavoriteshows';
      });    
  }


  ngOnInit(): void {

    this.http.get(" https://api.betaseries.com/shows/favorites?key=13d4afd6c13a&id=" + localStorage.getItem('id')).subscribe((data: any[]) => {

      this.arrayData = data['shows'];
    })
  }


}
