import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaPostComponent } from './tema-post.component';

describe('TemaPostComponent', () => {
  let component: TemaPostComponent;
  let fixture: ComponentFixture<TemaPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
