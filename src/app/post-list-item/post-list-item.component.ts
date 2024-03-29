import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input()
  post
  
  ngOnInit() {
  }

  loveIt(){
    this.post.loveIts++;
  }

  dontLoveIt(){
    this.post.loveIts--;
  }
}
