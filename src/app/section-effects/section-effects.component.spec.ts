import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEffectsComponent } from './section-effects.component';

describe('SectionEffectsComponent', () => {
  let component: SectionEffectsComponent;
  let fixture: ComponentFixture<SectionEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionEffectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
