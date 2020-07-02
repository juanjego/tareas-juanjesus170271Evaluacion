import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasregComponent } from './tareasreg.component';

describe('TareasregComponent', () => {
  let component: TareasregComponent;
  let fixture: ComponentFixture<TareasregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
