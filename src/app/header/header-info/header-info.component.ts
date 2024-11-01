import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMobileScreen, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-info',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-info.component.html',
  styleUrl: './header-info.component.scss',
})
export class HeaderInfoComponent {
  faMobileScreen = faMobileScreen;
  faAt = faAt;
}
