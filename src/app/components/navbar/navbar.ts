import {ChangeDetectionStrategy, Component, signal, AfterViewInit} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  readonly sections = [
    {id: 'inicio', label: 'Início'},
    {id: 'sobre', label: 'Sobre'},
    {id: 'skills', label: 'Skills'},
    {id: 'projetos', label: 'Projetos'},
    {id: 'contato', label: 'Contato'},
  ];

  readonly activeSection = signal('inicio');

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        }
      },
      {rootMargin: '-40% 0px -50% 0px', threshold: 0},
    );

    for (const section of this.sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
