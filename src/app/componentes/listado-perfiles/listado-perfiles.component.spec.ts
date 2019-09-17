import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPerfilesComponent } from './listado-perfiles.component';

describe('ListadoPerfilesComponent', () => {
  let component: ListadoPerfilesComponent;
  let fixture: ComponentFixture<ListadoPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
