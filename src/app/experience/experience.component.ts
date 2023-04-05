import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ResumeData } from '../resume.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css',"../myself/myself.component.css"]
})
export class ExperienceComponent implements OnInit{
  ExperienceWork? : string;
  constructor(private service: ResumeData){

  }
  ngOnInit(): void {
    this.ExperienceWork = this.service.getExperienceWork();
  }

}
