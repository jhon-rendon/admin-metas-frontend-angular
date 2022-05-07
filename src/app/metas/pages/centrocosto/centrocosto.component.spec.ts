import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrocostoComponent } from './centrocosto.component';

describe('CentrocostoComponent', () => {
  let component: CentrocostoComponent;
  let fixture: ComponentFixture<CentrocostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrocostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrocostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
