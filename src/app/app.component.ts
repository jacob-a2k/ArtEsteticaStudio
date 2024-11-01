import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SectionMainComponent } from './section-main/section-main.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionTreatmentsComponent } from './section-treatments/section-treatments.component';
import { SectionEffectsComponent } from './section-effects/section-effects.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';
import { SectionContactFormComponent } from './section-contact-form/section-contact-form.component';
import { SectionPriceComponent } from './section-price/section-price.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SectionMainComponent,
    SectionAboutComponent,
    SectionTreatmentsComponent,
    SectionEffectsComponent,
    SectionPriceComponent,
    SectionContactFormComponent,
    FooterComponent,
    FontAwesomeModule,
    NgStyle,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  faAnglesUp = faAnglesUp;
  title = 'ArtEsteticaStudio';

  isScrollToTopVisible: boolean = false;
  scrollPercentage: number = 0;

  @HostListener('window:scroll', []) onWindowScroll() {
    const scrolledHeight = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const documentHeight =
      document.documentElement.scrollHeight - viewportHeight;
    this.scrollPercentage = (scrolledHeight / documentHeight) * 100;
    this.isScrollToTopVisible = scrolledHeight > viewportHeight;
  }

  scrollToUp(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
