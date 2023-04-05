export class ResumeData{
  MySkills: string[] = ["HTML", "CSS", "JQuery", "JS","Node.JS","Angular","TypeScript","C#","ASP.NET","WPF","SQL","C++","XAML"];
  ExperienceWork : string = "I dont have any experience working programming but I have a few my works that can show you my programming lvl.)";
  getMySkills() : string[]{
    return this.MySkills;
  }
  getExperienceWork() : string{
    return this.ExperienceWork;
  }
}
