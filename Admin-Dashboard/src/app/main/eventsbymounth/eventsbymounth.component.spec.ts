import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsbymounthComponent } from './eventsbymounth.component';

describe('EventsbymounthComponent', () => {
  let component: EventsbymounthComponent;
  let fixture: ComponentFixture<EventsbymounthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsbymounthComponent]
    });
    fixture = TestBed.createComponent(EventsbymounthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
