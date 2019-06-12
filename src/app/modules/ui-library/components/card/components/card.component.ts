import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  public bgColor: string = null;

  @Input()
  public borderRadius: string = null;

  @Input()
  public width: string = null;

  @Input()
  public height: string = null;

  @Input()
  public padding: string = null;

  @Input()
  public margin: string = null;

}
