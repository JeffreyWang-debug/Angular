import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchilddomComponent } from './viewchilddom.component';

describe('ViewchilddomComponent', () => {
  let component: ViewchilddomComponent;
  let fixture: ComponentFixture<ViewchilddomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchilddomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchilddomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
