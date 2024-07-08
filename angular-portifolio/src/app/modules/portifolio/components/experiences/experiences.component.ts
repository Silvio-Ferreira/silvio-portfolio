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
        strong: 'Primeiro contato com a programação - C++',
        p: 'ETERJ | Março 2018',
      },
      text: '<p>Durante o segundo ano do ensino médio técnico em eletrônica, tive meu primeiro contato com a programação utilizando a linguagem C++,</p> <p> o que se estendeu até o terceiro ano, onde utilizamos a linguagem para programar Arduinos.</p>',
    },
    {
      summary: {
        strong: 'Primeiro projeto com Python - Smart Mirror',
        p: 'ETERJ | Outubro 2019 ',
      },
      text:'<p>Durante o meu último ano do ensino médio, meus amigos e eu fizemos um projeto para a feira de ciências da escola,</p> <p>um espelho que, além de poder ser usado para ver o seu reflexo, também poderia ser usado para visualizar informações diversas em tempo real,</p> <p>como o clima, hora, data e notícias do dia.</p>',
  
    },
    {
      summary: {
        strong: 'Minha entrada na faculdade',
        p: 'Unisuam | Fevereiro 2023',
      },
      text: '<p>Em 2022, decidi migrar da faculdade de Engenharia Elétrica e começar o curso de Análise e Desenvolvimento de Sistemas,</p> <p>curso no qual estou indo para o quarto semestre.</p>',
    },
    {
      summary: {
        strong: 'Atualmente',
        p: 'Julho 2024',
      },
      text: '<p>Continuo estudando as tecnologias que me interessam e aplicando o que aprendo em meus projetos.</p> <p>Atualmente, estou estudando sobre a Blockchain e em busca de um estágio na área de desenvolvimento.</p>',
    }
  ]);
}
