import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';
  posts = [
    {
      title : 'Mon premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : 'Mon deuxième post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus',
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : 'Encore un post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus',
      loveIts : 0,
      created_at : new Date()
    }
  ]
}
