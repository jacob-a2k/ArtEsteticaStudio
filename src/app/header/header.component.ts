import { Component } from '@angular/core';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderInfoComponent, HeaderNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
