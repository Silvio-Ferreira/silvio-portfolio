import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([ // <!-- Trocar pela minha trajetória até o momento -->
    // <!-- Trocar pela minha trajetória até o momento -->
    // <!-- Trocar pela minha trajetória até o momento -->
    // <!-- Trocar pela minha trajetória até o momento -->
    // <!-- Trocar pela minha trajetória até o momento -->
    {
      summary: {
        strong: 'Blog',
        //p: '',
      },
      text: 'Um blog pessoal desenvolviedo com Angular, TypeScript, HTML e CSS.',
    },
    {
      summary: {
        strong: 'Busca CEP',
       // p: '',
      },
      text:'O projeto "Consulta-CEP" é uma aplicação web que permite aos usuários pesquisar códigos postais brasileiros (CEP) e obter informações detalhadas do endereço. As tecnologias utilizadas foram HTML, CSS e JavaScript.',
  
    },
    {
      summary: {
        strong: 'Gerenciador de Contatos',
       // p: '',
      },
      text: 'É um sistema web de gerenciamento de contatos desenvolvido em C# e ASP.NET Core MVC. Ele possibilita aos usuários adicionar, editar e excluir informações de contato, como nomes, números de telefone e endereços de email. As tecnologias utilizadas incluem C#, ASP.NET Core MVC, Entity Framework, HTML, CSS e JavaScript.',
    },
    {
      summary: {
        strong: 'Quiz',
        //p: '',
      },
      text: 'O projeto "Angular BuzzFeed Quiz" é uma aplicação de quiz inspirada nos quizzes do BuzzFeed. Ele permite que os usuários respondam a quizzes e obtenham resultados personalizados com base em suas respostas. A aplicação é construída com Angular, TypeScript, HTML e CSS.',
    }
  ]);
}
