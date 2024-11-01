import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  faCircleLeft = faCircleLeft;
  faCircleRight = faCircleRight;

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = false;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex = 0;
  allIndicators = document.querySelectorAll('.dot');

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  // changes slide in every #slideInterval
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) this.selectedIndex = this.images.length - 1;
    else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) this.selectedIndex = 0;
    else {
      this.selectedIndex++;
    }
  }
}
