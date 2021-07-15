import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import {Post} from '../post';
import {AddPostService} from '../add-post.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  #formName = "ngForm"
  postModel= new Post();
  constructor(
    private postService: AddPostService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  addPost(){
    this.postModel.id = uuid();
    this.postService.addPost(this.postModel).subscribe(data=> alert("Successfully posted!"), error=>alert(error))
this.router.navigate(['']);
  }
}

// onSubmit(){
//   console.log(this.allFriend);
//   let observable = this.AddFriendService.addFriend(this.friendModel)
//   observable.subscribe(
//     data => console.log('it worked',data),
//     error => console.log('Error', error)
//   )
//   this.getWithAsync(this.AddFriendService._url);
// }

// async getWithAsync(_url:string) :Promise<any>{
//   await fetch(_url,{
//     method: 'GET', 
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then(response => {return response.json()})
//   .then(data => (this.allFriend=data));
// }