import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResourceFormComponent } from './resource-form.component';

describe('ResourceFormComponent', () => {
  let component: AddResourceFormComponent;
  let fixture: ComponentFixture<AddResourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResourceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});