import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwordComponent } from './stopword.component';

describe('StopwordComponent', () => {
  let component: StopwordComponent;
  let fixture: ComponentFixture<StopwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
