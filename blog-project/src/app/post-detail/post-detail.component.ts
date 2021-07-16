import { Component, OnInit } from '@angular/core';
import {Post} from '../post'

import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public selectedPost= new Post();
  id:string |undefined;
  constructor(
    private route: ActivatedRoute,
   
    // // private location: Location,
    // public selectedPost: Post
  ) {
    
   }

  ngOnInit(): void {
    this.getPost();

  }
  public async getPost(){
    this.id= String(this.route.snapshot.paramMap.get('id'));
    await fetch("http://localhost:6969/allPosts", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(array => (this.selectedPost = array.find((post:Post)=>(post.id === this.id))));
  }


  }