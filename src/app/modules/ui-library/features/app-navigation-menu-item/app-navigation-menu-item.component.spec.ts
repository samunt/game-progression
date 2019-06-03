import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigationMenuItemComponent } from './app-navigation-menu-item.component';

describe('AppNavigationMenuItemComponent', () => {
  let component: AppNavigationMenuItemComponent;
  let fixture: ComponentFixture<AppNavigationMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavigationMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavigationMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
