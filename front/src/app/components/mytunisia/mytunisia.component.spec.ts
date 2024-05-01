import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytunisiaComponent } from './mytunisia.component';

describe('MytunisiaComponent', () => {
  let component: MytunisiaComponent;
  let fixture: ComponentFixture<MytunisiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MytunisiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MytunisiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
