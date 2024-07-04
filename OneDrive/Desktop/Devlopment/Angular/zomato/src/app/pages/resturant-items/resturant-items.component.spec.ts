import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantItemsComponent } from './resturant-items.component';

describe('ResturantItemsComponent', () => {
  let component: ResturantItemsComponent;
  let fixture: ComponentFixture<ResturantItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResturantItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResturantItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
