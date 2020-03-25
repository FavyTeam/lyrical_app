import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricalComponent } from './lyrical.component';

describe('LyricalComponent', () => {
  let component: LyricalComponent;
  let fixture: ComponentFixture<LyricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
