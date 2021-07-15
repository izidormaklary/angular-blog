import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  
];
//  http://localhost:4200/1
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }