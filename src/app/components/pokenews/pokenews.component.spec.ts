import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokenewsComponent } from './pokenews.component';

describe('PokenewsComponent', () => {
  let component: PokenewsComponent;
  let fixture: ComponentFixture<PokenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokenewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
