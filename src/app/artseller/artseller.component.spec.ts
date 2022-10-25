import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsellerComponent } from './artseller.component';

describe('ArtsellerComponent', () => {
  let component: ArtsellerComponent;
  let fixture: ComponentFixture<ArtsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
