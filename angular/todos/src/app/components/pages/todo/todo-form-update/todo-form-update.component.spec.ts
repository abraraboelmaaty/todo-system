import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormUpdateComponent } from './todo-form-update.component';

describe('TodoFormUpdateComponent', () => {
  let component: TodoFormUpdateComponent;
  let fixture: ComponentFixture<TodoFormUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFormUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
