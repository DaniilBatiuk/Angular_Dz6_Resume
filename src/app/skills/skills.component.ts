import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css',"../myself/myself.component.css"]
})
export class SkillsComponent {
  MySkills: string[] = ["HTML", "CSS", "JQuery", "JS","Node.JS","Angular","TypeScript","C#","ASP.NET","WPF","SQL","C++"]
}
