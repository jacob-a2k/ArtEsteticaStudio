import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
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
  selector: 'app-header-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
  animations: [
    trigger('from-left-first', [
      state('hide', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('show', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hide => show', [animate('.7s ease')]),
    ]),
    trigger('from-left-second', [
      state('hide', style({ transform: 'translateX(-300%)', opacity: 0 })),
      state('show', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hide => show', [animate('1.3s ease')]),
    ]),
    trigger('from-left-third', [
      state('hide', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('show', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hide => show', [animate('1.9s ease')]),
    ]),
  ],
})
export class HeaderNavComponent {
  faBars = faBars;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faX = faX;

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

  @HostBinding('class.navbar-opened') navbarOpened = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.navbarOpened === true) this.navbarOpened = false;
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }
}
