import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SufferComponent } from './suffer.component';

describe('SufferComponent', () => {
  let component: SufferComponent;
  let fixture: ComponentFixture<SufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
