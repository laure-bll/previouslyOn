import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  arrayData = [];
  textarea;


  text(texta) {
    this.textarea = texta;
  }

  addComment() {
    let token = localStorage.getItem('connect');
    let id = localStorage.getItem('id');
    let id_chemin = document.location.href;
    id_chemin = id_chemin.substr(31);
    let params = {
      'type': 'episode',
      'id': id_chemin,
      'token': token,
      'text': this.textarea,
      'ref_id': id_chemin
    };

    if (token !== null && id !== null) {
      this.http.post("https://api.betaseries.com/comments/comment?key=13d4afd6c13a", params).subscribe
        ((data) => {
          window.location.href = '/comments/' + id_chemin;

        })
    }

    else {
      alert("You have to sign in to add a comment!")
    }
  }

  ngOnInit(): void {
    let id_chemin = document.location.href;
    id_chemin = id_chemin.substr(31);

    this.http.get("https://api.betaseries.com/comments/comments?key=13d4afd6c13a&type=episode&order=desc&id=" + id_chemin).subscribe((data: any[]) => {
      this.arrayData = data["comments"];

    })
  }

}
