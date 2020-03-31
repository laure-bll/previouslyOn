import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  arrayData = [];
  constructor(private http: HttpClient) { }

  Random() {
    this.http.get("https://api.betaseries.com/shows/random?key=13d4afd6c13a").subscribe((data: any[]) => {

      this.arrayData = data["shows"];
    })
  }

  ngOnInit(): void {

    this.http.get("https://api.betaseries.com/shows/random?key=13d4afd6c13a").subscribe((data: any[]) => {

      this.arrayData = data["shows"];
    })
  }
}
