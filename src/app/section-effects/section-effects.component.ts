import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShieldHeart, faComments } from '@fortawesome/free-solid-svg-icons';

interface effectType {
  procedureTitle: string;
  effectImg: string;
  effectAlt: string;
  customerOpinion: string;
  customerName: string;
}

@Component({
  selector: 'app-section-effects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './section-effects.component.html',
  styleUrl: './section-effects.component.scss',
})
export class SectionEffectsComponent {
  faShieldHeart = faShieldHeart;
  faComments = faComments;

  effectArray: effectType[] = [
    {
      procedureTitle: 'GENEO',
      effectImg: 'assets/changes/geneo.jpg',
      effectAlt: 'Kobieta przed i po zabiegu medycyny estetycznej',
      customerOpinion: 'Niesamowite oczyszczenie zaraz po pierwszym zabiegu',
      customerName: 'Joanna',
    },
    {
      procedureTitle: 'KRIOLIPOLIZA',
      effectImg: 'assets/changes/cooltech.jpg',
      effectAlt: 'Mężczyzna przed i po zabiegu medycyny estetycznej',
      customerOpinion: 'Niesamowite oczyszczenie zaraz po pierwszym zabiegu',
      customerName: 'Robert',
    },
    {
      procedureTitle: 'EM-BODY',
      effectImg: 'assets/changes/em-body.jpg',
      effectAlt: 'Kobieta przed i po zabiegu medycyny estetycznej',
      customerOpinion: 'Niesamowite oczyszczenie zaraz po pierwszym zabiegu',
      customerName: 'Katarzyna',
    },
    {
      procedureTitle: 'Fala Uderzeniowa',
      effectImg: 'assets/changes/fala_uderzeniowa.jpg',
      effectAlt: 'Mężczyzna przed i po zabiegu medycyny estetycznej',
      customerOpinion: 'Niesamowite oczyszczenie zaraz po pierwszym zabiegu',
      customerName: 'Zbigniew',
    },
  ];
}
