import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCreateComponent } from './work-create.component';

describe('WorkCreateComponent', () => {
  let component: WorkCreateComponent;
  let fixture: ComponentFixture<WorkCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkCreateComponent]
    });
    fixture = TestBed.createComponent(WorkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
