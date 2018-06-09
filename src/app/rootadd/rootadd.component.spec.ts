import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootaddComponent } from './rootadd.component';

describe('RootaddComponent', () => {
  let component: RootaddComponent;
  let fixture: ComponentFixture<RootaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
