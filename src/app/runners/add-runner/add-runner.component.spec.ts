import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddRunnerComponent} from './add-runner.component';

describe('AddRunnerComponent', () => {
  let component: AddRunnerComponent;
  let fixture: ComponentFixture<AddRunnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRunnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
