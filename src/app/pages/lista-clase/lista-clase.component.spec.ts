import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClaseComponent } from './lista-clase.component';

describe('ListaClaseComponent', () => {
  let component: ListaClaseComponent;
  let fixture: ComponentFixture<ListaClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
