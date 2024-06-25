import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayknowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/angular-icon-1.svg',
      alt: 'Ícone de conhecimento de Angular.',
    },
    {
      src: 'assets/icons/knowledge/css-3.svg',
      alt: 'Ícone de conhecimento de CSS.',
    },
    {
      src: 'assets/icons/knowledge/html-1.svg',
      alt: 'Ícone de conhecimento de HTML.',
    },
    {
      src: 'assets/icons/knowledge/javascript-1.svg',
      alt: 'Ícone de conhecimento de JavaScript.',
    },
    {
      src: 'assets/icons/knowledge/microsoft-sql-server-1.svg',
      alt: 'Ícone de conhecimento de SQL Server.',
    },
    {
      src: 'assets/icons/knowledge/mongodb-icon-2.svg',
      alt: 'Ícone de conhecimento de MongoDB.',
    },
    {
      src: 'assets/icons/knowledge/dotnet-svgrepo-com.svg',
      alt: 'Ícone de conhecimento de .Net.',
    },
    {
      src: 'assets/icons/knowledge/c--4.svg',
      alt: 'Ícone de conhecimento de C#.',
    }
  ])
} 
