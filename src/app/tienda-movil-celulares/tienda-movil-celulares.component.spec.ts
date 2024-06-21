import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMovilCelularesComponent } from './tienda-movil-celulares.component';

describe('TiendaMovilCelularesComponent', () => {
  let component: TiendaMovilCelularesComponent;
  let fixture: ComponentFixture<TiendaMovilCelularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaMovilCelularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaMovilCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
