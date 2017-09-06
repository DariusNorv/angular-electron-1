import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartthisComponent } from './heartthis.component';

describe('HeartthisComponent', () => {
  let component: HeartthisComponent;
  let fixture: ComponentFixture<HeartthisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeartthisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartthisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
