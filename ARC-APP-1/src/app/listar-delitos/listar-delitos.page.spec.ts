import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarDelitosPage } from './listar-delitos.page';

describe('ListarDelitosPage', () => {
  let component: ListarDelitosPage;
  let fixture: ComponentFixture<ListarDelitosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDelitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
