import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];
  
  ngOnInit(): void {
    
    let id_chemin = document.location.href;
    id_chemin = id_chemin.substr(37);
    console.log(id_chemin);
    this.http.get("https://api.betaseries.com/episodes/display?key=13d4afd6c13a&id=" + id_chemin).subscribe((data: any[]) => {
      this.arrayData = data["episode"];
    })
  }

}
