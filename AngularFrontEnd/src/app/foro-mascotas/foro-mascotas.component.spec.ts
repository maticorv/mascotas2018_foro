import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoMascotasComponent } from './foro-mascotas.component';

describe('ForoMascotasComponent', () => {
  let component: ForoMascotasComponent;
  let fixture: ComponentFixture<ForoMascotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoMascotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
