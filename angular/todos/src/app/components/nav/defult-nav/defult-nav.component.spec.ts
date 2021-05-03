import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefultNavComponent } from './defult-nav.component';

describe('DefultNavComponent', () => {
  let component: DefultNavComponent;
  let fixture: ComponentFixture<DefultNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefultNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefultNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
