import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-series',
  templateUrl: './home-series.component.html',
  styleUrls: ['./home-series.component.scss']
})
export class HomeSeriesComponent implements OnInit {

  arrayData = [];
  genres;
  arrayGenres = [];
  arrayCategories = [];

  constructor(private http: HttpClient) {
  }
  title;


  Title(event): void {

    this.http.get("https://api.betaseries.com/shows/search?key=13d4afd6c13a&title=" + event).subscribe((data) => {
      this.arrayData = data['shows'];
    });
  }

  ngOnInit(): void {

    this.http.get("https://api.betaseries.com/shows/discover?key=13d4afd6c13a").subscribe((data: any[]) => {
      this.arrayData = data['shows'];
    })

  }
}
