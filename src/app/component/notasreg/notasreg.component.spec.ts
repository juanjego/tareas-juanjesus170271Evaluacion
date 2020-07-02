import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasregComponent } from './notasreg.component';

describe('NotasregComponent', () => {
  let component: NotasregComponent;
  let fixture: ComponentFixture<NotasregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotasregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
