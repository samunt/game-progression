import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent {

  @Input()
  public src = 'https://avatarfiles.alphacoders.com/144/144986.jpg';

}
