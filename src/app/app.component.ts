import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Posts';
  posts = [
    {
      title : 'Mon premier post',
      content : 'Lorem Ipsum first post',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : 'Mon deuxième post',
      content : 'Lorem Ipsum second post',
      loveIts : 0,
      created_at : '02'
    },
    {
      title : 'Encore un post',
      content : 'Lorem Ipsum one another post',
      loveIts : 0,
      created_at : '03'
    }
  ]
}
