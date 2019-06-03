import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDeleteComponent } from './games-delete.component';

describe('GamesDeleteComponent', () => {
  let component: GamesDeleteComponent;
  let fixture: ComponentFixture<GamesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
