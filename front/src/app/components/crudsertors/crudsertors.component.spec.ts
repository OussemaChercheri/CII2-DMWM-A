import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudsertorsComponent } from './crudsertors.component';

describe('CrudsertorsComponent', () => {
  let component: CrudsertorsComponent;
  let fixture: ComponentFixture<CrudsertorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudsertorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudsertorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
