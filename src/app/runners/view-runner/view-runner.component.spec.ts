import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewRunnerComponent} from './view-runner.component';

describe('ViewRunnerComponent', () => {
  let component: ViewRunnerComponent;
  let fixture: ComponentFixture<ViewRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRunnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
