import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwordlistComponent } from './stopwordlist.component';

describe('StopwordlistComponent', () => {
  let component: StopwordlistComponent;
  let fixture: ComponentFixture<StopwordlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwordlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
