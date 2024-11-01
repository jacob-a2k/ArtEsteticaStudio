import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section-main',
  standalone: true,
  imports: [CarouselComponent, FontAwesomeModule],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss',
})
export class SectionMainComponent {
  faCaretDown = faCaretDown;

  images = [
    {
      imageSrc: 'assets/beauty-face-1.webp',
      imageAlt: 'face-first',
    },
    {
      imageSrc: 'assets/beauty-face-4.webp',
      imageAlt: 'face-second',
    },
    {
      imageSrc: 'assets/beauty-face-2.webp',
      imageAlt: 'face-third',
    },
  ];
}
