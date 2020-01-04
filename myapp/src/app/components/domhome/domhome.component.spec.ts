import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomhomeComponent } from './domhome.component';

describe('DomhomeComponent', () => {
  let component: DomhomeComponent;
  let fixture: ComponentFixture<DomhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
