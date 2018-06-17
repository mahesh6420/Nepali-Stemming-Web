
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixlistComponent } from './list.component';

describe('SuffixlistComponent', () => {
  let component: SuffixlistComponent;
  let fixture: ComponentFixture<SuffixlistComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuffixlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuffixlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
