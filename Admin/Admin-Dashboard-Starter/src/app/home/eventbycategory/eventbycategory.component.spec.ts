import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbycategoryComponent } from './eventbycategory.component';

describe('EventbycategoryComponent', () => {
  let component: EventbycategoryComponent;
  let fixture: ComponentFixture<EventbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
