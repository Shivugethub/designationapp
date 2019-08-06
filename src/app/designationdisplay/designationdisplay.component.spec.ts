import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationdisplayComponent } from './designationdisplay.component';

describe('DesignationdisplayComponent', () => {
  let component: DesignationdisplayComponent;
  let fixture: ComponentFixture<DesignationdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
