import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcPageComponent } from './pc-page.component';

describe('PcPageComponent', () => {
  let component: PcPageComponent;
  let fixture: ComponentFixture<PcPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
