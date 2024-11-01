import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPriceComponent } from './section-price.component';

describe('SectionPriceComponent', () => {
  let component: SectionPriceComponent;
  let fixture: ComponentFixture<SectionPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
