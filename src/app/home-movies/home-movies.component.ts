import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.scss']
})
export class HomeMoviesComponent implements OnInit {

  arrayData = [];



  constructor(private http: HttpClient) {
  }

  Title(event): void {

    this.http.get("https://api.betaseries.com/movies/search?key=13d4afd6c13a&title=" + event).subscribe((data) => {
      this.arrayData = data['movies'];
    });
  }


  ngOnInit(): void {

    this.http.get("https://api.betaseries.com/movies/random?key=13d4afd6c13a&nb=100").subscribe((data: any[]) => {
      this.arrayData = data['movies'];
    })

  }
}

