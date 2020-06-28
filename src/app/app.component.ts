import { query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, HostBinding } from '@angular/core';
import { fadeInDown } from 'ng-animate';

export interface Option {
  text: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('staggerText', [
      transition(':enter', [
        query('.headline, .stats, .option', [
          style({ opacity: 0 }),
          stagger(-100, [
            useAnimation(fadeInDown),
            style({ opacity: 1 })
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {

  @HostBinding('@staggerText')

  public options: Option[] = [
    {
      text: 'Find language tutors',
      image: '../assets/tutor.jpg'
    },
    {
      text: 'Find exchange partners',
      image: '../assets/exchange.jpg'
    },
    {
      text: 'Blog Community',
      image: '../assets/blogger.jpg'
    },
    {
      text: 'Language Events',
      image: '../assets/event.jpg'
    }
  ];
}
