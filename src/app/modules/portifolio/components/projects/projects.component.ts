import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
public arrayProjects = signal<IProjects[]>([
  {
    src: 'assets/icons/projetos/blog.mp4',
    
    title: 'Angular Blog',
    width: '100%',
    height: '100%',
    description: '<p>O projeto "Angular Blog" é uma aplicação de blog desenvolvida com Angular, baseada em um layout do Dribbble. Ele permite criar e gerenciar postagens de blog com uma interface moderna e responsiva.</p>',
    links: [
      {
      name: 'Conheça o projeto',
      href: 'https://github.com/Silvio-Ferreira/angular-blog'
    }
  ]
  },
  {
    src: 'assets/icons/projetos/cep.mp4',
  
    title: 'Consulta CEP',
    width: '100%',
    height: '100%',
    description: '<p>O projeto "Consulta CEP" é uma aplicação web desenvolvida para consultar endereços a partir de um CEP. Usando HTML, CSS e JavaScript, a aplicação permite que os usuários insiram um CEP e recebam informações detalhadas sobre o endereço correspondente.</p>',
    links: [
      {
      name: 'Conheça o projeto',
      href: 'https://github.com/Silvio-Ferreira/Consulta-CEP'
    }
  ]
  },
  {
    src: 'assets/icons/projetos/contatos.mp4',
   
    title: 'Gerenciador de Contatos',
    width: '100%',
    height: '100%',
    description: '<p>O projeto "CSharp Gerenciador de Contatos" é uma aplicação desenvolvida em C# com o objetivo de gerenciar contatos de maneira eficiente. A aplicação oferece funcionalidades como adicionar, editar, remover e visualizar contatos, garantindo uma organização prática e intuitiva.</p><p>O projeto utiliza a linguagem C# para a lógica de negócios e manipulação de dados, além de frameworks e bibliotecas relevantes para a construção da interface.</p>',
    links: [
      {
      name: 'Conheça o projeto',
      href: 'https://github.com/Silvio-Ferreira/CSharp-gerenciador-de-contatos'
    }
  ]
  },
  {
    src: 'assets/icons/projetos/quiz.mp4',
   
    title: 'Angular BuzzFeed Quiz',
    width: '100%',
    height: '100%',
    description: '<p>O projeto "Angular BuzzFeed Quiz" é uma aplicação web interativa desenvolvida em Angular, que permite aos usuários responder a uma série de perguntas estilo BuzzFeed e obter resultados personalizados.</p><p>As principais tecnologias utilizadas são Angular, TypeScript, HTML, CSS e Bootstrap.</p>',
    links: [
      {
      name: 'Conheça o projeto',
      href: 'https://github.com/Silvio-Ferreira/Angular-BuzzFeed-Quiz'
    }
  ]
  }
]);

public openDialog(data: IProjects){
  this.#dialog.open(DialogProjectsComponent, {
    data,
    panelClass: EDialogPanelClass.PROJECTS
  })
}
}
