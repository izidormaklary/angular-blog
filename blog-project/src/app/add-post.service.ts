import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import {Post} from './post'
@Injectable({
  providedIn: 'root'
})
export class AddPostService {

  private url = 'http://localhost:6969/allPosts';
  constructor(
   private http : HttpClient
  ) { }

  addPost(post:Post){
   return this.http.post<any>( this.url, post)
  }
}