import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuaComponent } from './product-sua.component';

describe('ProductSuaComponent', () => {
  let component: ProductSuaComponent;
  let fixture: ComponentFixture<ProductSuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
