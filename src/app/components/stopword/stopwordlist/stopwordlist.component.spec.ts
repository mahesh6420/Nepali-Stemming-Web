
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopwordlistComponent } from './stopwordlist.component';

describe('StopwordlistComponent', () => {
  let component: StopwordlistComponent;
  let fixture: ComponentFixture<StopwordlistComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StopwordlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopwordlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
