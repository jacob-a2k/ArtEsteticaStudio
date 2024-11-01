import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandPointDown, faCheck } from '@fortawesome/free-solid-svg-icons';

interface aboutComponent {
  aboutImg: string;
  aboutTitle: string;
  aboutDescription: Array<string>;
}

@Component({
  selector: 'app-section-about',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.scss',
})
export class SectionAboutComponent {
  faHandPointDown = faHandPointDown;
  faCheck = faCheck;

  selectedIndex = -1;

  active: boolean = true;

  componentArray: aboutComponent[] = [
    {
      aboutImg: 'assets/flower-face-1.webp',
      aboutTitle: 'INDYWIDUALNE PODEJŚCIE',
      aboutDescription: [
        'rozmowa z klientem',
        'zdefiniowanie problemu',
        'przedstawienie metod leczenia',
        'dobór najlepszego rozwiązania',
      ],
    },
    {
      aboutImg: 'assets/flower-face-2.webp',
      aboutTitle: 'PROFESJONALNE ZABIEGI',
      aboutDescription: [
        'skupienie na kliencie',
        'relaksująca atmosfera',
        'prowadzenie krok po kroku',
        'widoczne efekty',
      ],
    },
    {
      aboutImg: 'assets/flower-face-3.webp',
      aboutTitle: 'WYSZKOLONA KADRA',
      aboutDescription: [
        'przygotowanie mertoryczne',
        'doświadczenia zawodowe',
        'ciągłe doszkalanie',
        'szlifowanie naszych technik',
      ],
    },
  ];

  toggleActive(index: number) {
    if (this.selectedIndex === index) index = -1;
    this.selectedIndex = index;
  }
}
