import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-infos-movies',
  templateUrl: './infos-movies.component.html',
  styleUrls: ['./infos-movies.component.scss']
})
export class InfosMoviesComponent implements OnInit {

arrayData = [];
vide = "";

constructor(private http: HttpClient) {  
  
}

ngOnInit(): void {

  var id_chemin = document.location.href;
  id_chemin = id_chemin.substr(33); 
  
  
  this.http.get("https://api.betaseries.com/movies/movie?key=13d4afd6c13a&id=" + id_chemin).subscribe((data: any[]) => {
    this.arrayData = data;
    })

  }
}
