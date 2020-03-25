import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoltComponent } from './bolt.component';

describe('BoltComponent', () => {
  let component: BoltComponent;
  let fixture: ComponentFixture<BoltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
