import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  public fontFamily: string = null;

  @Input()
  public bgColor: string = null;

  @Input()
  public fontColor: string = null;

  @Input()
  public borderRadius: string = null;

  @Input()
  public fontWeight: number = null;

  @Input()
  public height: string = null;

  @Input()
  public width: string = null;

  @Input()
  public fontSize: string = null;
}
