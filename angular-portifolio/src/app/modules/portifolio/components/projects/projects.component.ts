import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/icons/projetos/blog.mp4',
    //alt: "Projeto Angular-Blog",
    title: 'Angular-Blog',
    width: '100%',
    height: '100%',
    description: '',
    links: [
      {
      name: 'Conheça o projeto',
      href: ''
    }
  ]
  },
  {
    src: 'assets/icons/projetos/cep.mp4',
   // alt: "Projeto Angular-Blog",
    title: 'Angular-Blog',
    width: '100%',
    height: '100%',
    description: '',
    links: [
      {
      name: 'Conheça o projeto',
      href: ''
    }
  ]
  },
  {
    src: 'assets/icons/projetos/contatos.mp4',
    //alt: "Projeto Angular-Blog",
    title: 'Angular-Blog',
    width: '100%',
    height: '100%',
    description: '',
    links: [
      {
      name: 'Conheça o projeto',
      href: ''
    }
  ]
  },
  {
    src: 'assets/icons/projetos/quiz.mp4',
    //alt: "Projeto Angular-Blog",
    title: 'Angular-Blog',
    width: '100%',
    height: '100%',
    description: '',
    links: [
      {
      name: 'Conheça o projeto',
      href: ''
    }
  ]
  }
]);
}
