import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation-menu-item',
  templateUrl: './app-navigation-menu-item.component.html',
  styleUrls: ['./app-navigation-menu-item.component.scss']
})
export class AppNavigationMenuItemComponent  {

  @Input()
  public href: string = null;

}
