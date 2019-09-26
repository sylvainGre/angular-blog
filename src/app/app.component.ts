import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  post1 = new Post('Mon premier post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus');
  post2 = new Post('Mon deuxième post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus');
  post3 = new Post('Encore un post','Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ullamcorper libero, quis aliquam mi commodo condimentum. Aenean molestie leo magna, a mollis enim laoreet in. Phasellus bibendum, mi quis tincidunt porta, metus mi porta nibh, sit amet condimentum odio nisl consequat diam. In rutrum justo ornare, blandit felis ac, vehicula leo. Nulla faucibus vel orci a eleifend. Duis eget pretium sapien. Nullam sed neque tellus');
  
  posts : Post[] = [this.post1, this.post2, this.post3];

}
