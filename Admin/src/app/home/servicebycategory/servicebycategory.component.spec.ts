import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicebycategoryComponent } from './servicebycategory.component';

describe('ServicebycategoryComponent', () => {
  let component: ServicebycategoryComponent;
  let fixture: ComponentFixture<ServicebycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicebycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicebycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
