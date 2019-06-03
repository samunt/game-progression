import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAddComponent } from './games-add.component';

describe('GamesAddComponent', () => {
  let component: GamesAddComponent;
  let fixture: ComponentFixture<GamesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
