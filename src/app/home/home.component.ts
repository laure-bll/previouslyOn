import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  arrayData = [];
  genres;
  arrayGenres = [];
  arrayCategories = [];

  constructor(private http: HttpClient) {
  }

  categorie = "";
  title;

  Categories(event): void {
    this.categorie = event;

    this.http.get("https://api.betaseries.com/shows/genres?key=13d4afd6c13a=" + this.categorie).subscribe((data: any[]) => {
      this.arrayData = data['show'];
    })
  }

  Title(event): void {

    this.http.get("https://api.betaseries.com/shows/search?key=13d4afd6c13a&title=" + event).subscribe((data) => {
      this.arrayData = data['shows'];
    });
  }

  ngOnInit(): void {

    this.http.get("https://api.betaseries.com/shows/discover?key=13d4afd6c13a").subscribe((data: any[]) => {
      this.arrayData = data['shows'];
    })

    this.http.get("https://api.betaseries.com/shows/genres?key=13d4afd6c13a").subscribe((data: any[]) => {
      this.arrayCategories = data['genres'];
    })
  }
}

// this.http.get("https://api.betaseries.co13d4afd6c13am/shows/discover?key=").subscribe((data: any[]) => {
//   this.arrayData = data['shows'];
//   console.log(this.arrayData);
// })