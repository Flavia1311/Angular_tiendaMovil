import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMovilAboutComponent } from './tienda-movil-about.component';

describe('TiendaMovilAboutComponent', () => {
  let component: TiendaMovilAboutComponent;
  let fixture: ComponentFixture<TiendaMovilAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaMovilAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiendaMovilAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
