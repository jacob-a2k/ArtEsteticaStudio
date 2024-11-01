import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  viewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMobileScreen,
  faAt,
  faLocationDot,
  faClock,
  faUserClock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  state,
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  animations: [
    trigger('show-from-left', [
      state('hide', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state(
        'show',
        style({ transform: 'translateX(0)', opacity: 1, fontSize: 35 })
      ),
      transition('hide => show', [animate('1.3s ease')]),
    ]),
    trigger('show-from-right', [
      state('hide', style({ transform: 'translateX(100%)', opacity: 0 })),
      state(
        'show',
        style({ transform: 'translateX(0)', opacity: 1, fontSize: 35 })
      ),
      transition('hide => show', [animate('1.3s ease')]),
    ]),
    trigger('show-from-top', [
      state('hide', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state(
        'show',
        style({ transform: 'translateY(0%)', opacity: 1, fontSize: 35 })
      ),
      transition('hide => show', [animate('1.3s ease')]),
    ]),
  ],
})
export class FooterComponent {
  faMobileScreen = faMobileScreen;
  faAt = faAt;
  faLocationDot = faLocationDot;
  faClock = faClock;
  faUserClock = faUserClock;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;

  @ViewChild('observed', { static: true }) observed!: ElementRef;

  elementInView: boolean = false;
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementInView = true;
        } else {
          this.elementInView = false;
        }
      });
    });
    this.observer.observe(this.observed.nativeElement);
  }
}
