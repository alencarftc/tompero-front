import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateRecipeComponent } from './add-or-update-recipe.component';

describe('AddOrUpdateRecipeComponent', () => {
  let component: AddOrUpdateRecipeComponent;
  let fixture: ComponentFixture<AddOrUpdateRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
