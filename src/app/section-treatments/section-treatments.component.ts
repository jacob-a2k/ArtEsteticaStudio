import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TreatmentType {
  treatmentImg: string;
  treatmentTitle: string;
  treatmentText: string;
}

@Component({
  selector: 'app-section-treatments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-treatments.component.html',
  styleUrl: './section-treatments.component.scss',
})
export class SectionTreatmentsComponent {
  treatmentArray: TreatmentType[] = [
    {
      treatmentImg: 'assets/treatment-img/em-body.jpeg',
      treatmentTitle: 'EM BODY',
      treatmentText: `Wykorzystuje pole magnetyczne o dużej intensywności do wywoływania skurczów
      mięśni, podczas zabiegu pacjent jest w pozycji leżącej, a jego mięśnie intensywnie pracują, EM Body daje efekt
      wyrzeźbienia ciała i rozbija komórki tłuszczowe, pomagając w pozbyciu się zbędnych kilogramów`,
    },
    {
      treatmentImg: 'assets/treatment-img/kriolipoliza.jpeg',
      treatmentTitle: 'KRIOLIPOLIZA',
      treatmentText: `Zabieg polega na zamrażaniu komórek tłuszczowych, które w jego wyniku ulegają zniszczeniu i są naturalnie wydalane przez organizm`,
    },
    {
      treatmentImg: 'assets/treatment-img/geneo.webp',
      treatmentTitle: 'GENEO',
      treatmentText: `Złuszczanie, nawilżanie i rozświetlenie skóry, efekty widoczne od razu po zabiegu`,
    },
    {
      treatmentImg: 'assets/treatment-img/fala-uderzeniowa.jpg',
      treatmentTitle: 'FALA UDERZENIOWA',
      treatmentText: `Radialna fala akustyczna wprawiająca tkanki i mięśnie w drganie, doprowadza do rozbicia się komórek tłuszczowych, skuteczna metoda walki z cellulitem`,
    },
    // {
    //   treatmentImg: 'assets/treatment-img/laser-fotna.webp',
    //   treatmentTitle: 'LASER FOTONA',
    //   treatmentText:
    // },
  ];
}
