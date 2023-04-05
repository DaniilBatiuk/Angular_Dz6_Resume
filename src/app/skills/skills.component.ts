import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../resume.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css',"../myself/myself.component.css"]
})
export class SkillsComponent implements OnInit {
  MySkills?: string[];
  constructor(private service: ResumeData){

  }
  ngOnInit(): void {
    this.MySkills = this.service.getMySkills();
  }
}
