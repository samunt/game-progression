import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingContentComponent } from './gaming-content.component';

describe('GamingContentComponent', () => {
  let component: GamingContentComponent;
  let fixture: ComponentFixture<GamingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
