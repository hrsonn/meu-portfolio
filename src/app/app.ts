import {afterNextRender, ChangeDetectionStrategy, Component} from '@angular/core';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';
import {Footer} from './components/footer/footer';
import {Hero} from './components/hero/hero';
import {Navbar} from './components/navbar/navbar';
import {Projects} from './components/projects/projects';
import {Skills} from './components/skills/skills';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Hero, About, Skills, Projects, Contact, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    afterNextRender(() => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (!cursor) return;
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });
    });
  }
}
