import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixlistComponent } from './suffixlist.component';

describe('SuffixlistComponent', () => {
  let component: SuffixlistComponent;
  let fixture: ComponentFixture<SuffixlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuffixlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffixlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
