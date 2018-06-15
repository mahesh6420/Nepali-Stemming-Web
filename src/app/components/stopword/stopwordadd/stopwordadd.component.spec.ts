import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwordaddComponent } from './stopwordadd.component';

describe('StopwordaddComponent', () => {
  let component: StopwordaddComponent;
  let fixture: ComponentFixture<StopwordaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwordaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopwordaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
