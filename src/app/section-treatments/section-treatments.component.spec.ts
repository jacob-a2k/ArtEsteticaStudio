import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTreatmentsComponent } from './section-treatments.component';

describe('SectionTreatmentsComponent', () => {
  let component: SectionTreatmentsComponent;
  let fixture: ComponentFixture<SectionTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTreatmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
