import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAllpagesComponent } from './navbar-allpages.component';

describe('NavbarAllpagesComponent', () => {
  let component: NavbarAllpagesComponent;
  let fixture: ComponentFixture<NavbarAllpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAllpagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAllpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
