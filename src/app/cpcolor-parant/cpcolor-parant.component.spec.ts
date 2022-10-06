import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpcolorParantComponent } from './cpcolor-parant.component';

describe('CpcolorParantComponent', () => {
  let component: CpcolorParantComponent;
  let fixture: ComponentFixture<CpcolorParantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpcolorParantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpcolorParantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
