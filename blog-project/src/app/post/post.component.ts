import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //all the posts ( gets loaded with the fetch function) 
  public allPosts:any;
  
  constructor() { }

  ngOnInit(): void {
    this.fetchPosts("http://localhost:6969/allPosts")
  }

  public async fetchPosts(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(data => (this.allPosts = data));
  

  }
}
