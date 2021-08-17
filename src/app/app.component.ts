import { Component } from '@angular/core';


class Klant {
  tel: number[] = [];
  constructor(t: number[]) {
    this.tel = t;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AngularFundamentals-StructuurDirectives';
  public namen: string[] = ['Elon', 'Jeff', 'Richard'];
  public klant1: Klant = new Klant([8378374, 345345, 34545]);
  public klant2: Klant = new Klant([]);
  superhero = 'Spiderman';
}
