import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixaddComponent } from './suffixadd.component';

describe('SuffixaddComponent', () => {
  let component: SuffixaddComponent;
  let fixture: ComponentFixture<SuffixaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuffixaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
