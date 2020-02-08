import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchersComponent } from './catchers.component';

describe('CatchersComponent', () => {
  let component: CatchersComponent;
  let fixture: ComponentFixture<CatchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
