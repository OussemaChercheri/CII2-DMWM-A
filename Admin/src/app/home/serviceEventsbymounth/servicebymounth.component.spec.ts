import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicebymounthComponent } from './servicebymounth.component';

describe('ServicebymounthComponent', () => {
  let component: ServicebymounthComponent;
  let fixture: ComponentFixture<ServicebymounthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicebymounthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicebymounthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
