import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyselfComponent } from './myself/myself.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule } from '@angular/forms';
import { ResumeData } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    MyselfComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ResumeData],
  bootstrap: [AppComponent]
})
export class AppModule { }
