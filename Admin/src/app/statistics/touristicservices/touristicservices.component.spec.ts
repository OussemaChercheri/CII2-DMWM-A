import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristicservicesComponent } from './touristicservices.component';

describe('TouristicservicesComponent', () => {
  let component: TouristicservicesComponent;
  let fixture: ComponentFixture<TouristicservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristicservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristicservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
