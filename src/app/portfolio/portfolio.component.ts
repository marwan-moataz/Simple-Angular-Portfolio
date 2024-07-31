import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  project: Project = {
    name: 'ReactJS Project',
    projectLink:
      'http://www.gerardgorman.com/uploads/1/7/8/0/17808/1a_orig.jpeg',
    description:
      'Here is my project which i have used all my skills in this language',
    pictures: '',
  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Marwan Moataz - Portfolio');
  }
}
