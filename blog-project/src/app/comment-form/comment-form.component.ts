import { Component, OnInit, Input } from '@angular/core';
import {AddPostService} from '../add-post.service'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  #formName = "ngForm"
  @Input() post:any;
  commentModel = {id:"", user:"", text:"" }
  constructor(
    private postService: AddPostService,
  ) { }

  ngOnInit(): void {
  }
  addComment(){
    console.log(this.commentModel)
     this.postService.addComment(this.post.id, this.commentModel).subscribe(data=> alert("Successfully posted!"), error=>alert(error))
  }
}
