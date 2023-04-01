import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Dz6';
  catPhoto: string = "../assets/photos/cat.jpg";
  CountCats: string = "Count cats";
  Description: string = "I count the number of cats that come on my land to a female cat.";
  GitHum = "https://github.com/DaniilBatiuk";
}
