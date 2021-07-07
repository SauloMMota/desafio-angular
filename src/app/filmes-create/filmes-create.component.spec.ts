import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesCreateComponent } from './filmes-create.component';

describe('FilmesCreateComponent', () => {
  let component: FilmesCreateComponent;
  let fixture: ComponentFixture<FilmesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
