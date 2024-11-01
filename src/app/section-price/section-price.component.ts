import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoins, faClock } from '@fortawesome/free-solid-svg-icons';

interface DetailsType {
  bodyPart: string;
  time: number;
  cost: number;
}

interface ServiceType {
  serviceName: string;
  serviceDetails: DetailsType[];
}

@Component({
  selector: 'app-section-price',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './section-price.component.html',
  styleUrl: './section-price.component.scss',
})
export class SectionPriceComponent {
  faCoins = faCoins;
  faClock = faClock;

  serviceTable: ServiceType[] = [
    {
      serviceName: 'Geneo',
      serviceDetails: [
        {
          bodyPart: 'Twarz',
          time: 45,
          cost: 250,
        },
        {
          bodyPart: 'Przedramiona',
          time: 60,
          cost: 300,
        },
        {
          bodyPart: 'Pośladki',
          time: 30,
          cost: 200,
        },
      ],
    },
    {
      serviceName: 'EM-BODY',
      serviceDetails: [
        {
          bodyPart: 'Twarz',
          time: 45,
          cost: 250,
        },
        {
          bodyPart: 'Przedramiona',
          time: 60,
          cost: 300,
        },
        {
          bodyPart: 'Pośladki',
          time: 30,
          cost: 200,
        },
      ],
    },
    {
      serviceName: 'Kriolipoliza',
      serviceDetails: [
        {
          bodyPart: 'Brzuch',
          time: 120,
          cost: 250,
        },
      ],
    },
    {
      serviceName: 'Fala Uderzeniowa',
      serviceDetails: [
        {
          bodyPart: 'Twarz',
          time: 45,
          cost: 250,
        },
        {
          bodyPart: 'Przedramiona',
          time: 60,
          cost: 300,
        },
        {
          bodyPart: 'Pośladki',
          time: 30,
          cost: 200,
        },
      ],
    },
  ];
}
