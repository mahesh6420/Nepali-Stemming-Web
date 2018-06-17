
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootlistComponent } from './rootlist.component';

describe('RootlistComponent', () => {
  let component: RootlistComponent;
  let fixture: ComponentFixture<RootlistComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RootlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
