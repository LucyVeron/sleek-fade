import { Component } from '@angular/core';

export interface Option {
  text: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
