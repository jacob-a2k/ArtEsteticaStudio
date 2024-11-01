import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselModule } from './section-main/carousel/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailService } from './services/email.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CarouselModule],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
