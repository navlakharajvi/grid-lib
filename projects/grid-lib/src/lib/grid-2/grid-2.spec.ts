import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grid2 } from './grid-2';

describe('Grid2', () => {
  let component: Grid2;
  let fixture: ComponentFixture<Grid2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grid2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grid2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
