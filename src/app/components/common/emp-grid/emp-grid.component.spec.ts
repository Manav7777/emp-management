import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpGridComponent } from './emp-grid.component';

describe('EmpGridComponent', () => {
  let component: EmpGridComponent;
  let fixture: ComponentFixture<EmpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
