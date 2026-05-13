import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {About} from './components/about/about';
import {Hero} from './components/hero/hero';
import {Skills} from './components/skills/skills';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [Hero, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    '[class.cursor-none]': 'useCustomCursor()',
  },
})
export class App {
  private readonly platformId = inject(PLATFORM_ID);

  readonly useCustomCursor = signal(this.initialCustomCursor());

  readonly cursorX = signal(0);
  readonly cursorY = signal(0);
  readonly isHovering = signal(false);

  private initialCustomCursor(): boolean {
    if (!isPlatformBrowser(this.platformId) || typeof globalThis.matchMedia !== 'function') {
      return false;
    }
    return globalThis.matchMedia('(min-width: 1024px)').matches;
  }

  constructor() {
    if (!isPlatformBrowser(this.platformId) || typeof globalThis.matchMedia !== 'function') {
      return;
    }

    const mq = globalThis.matchMedia('(min-width: 1024px)');
    const listener = () => this.useCustomCursor.set(mq.matches);
    mq.addEventListener('change', listener);
    inject(DestroyRef).onDestroy(() => mq.removeEventListener('change', listener));
  }

  cursorTransform(): string {
    const scale = this.isHovering() ? 1.5 : 1;
    const x = this.cursorX() - 8;
    const y = this.cursorY() - 8;
    return `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.useCustomCursor()) {
      return;
    }
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);

    const el = document.elementFromPoint(event.clientX, event.clientY);
    const interactive = el?.closest('a, button, [role="button"], input, textarea, select, label');
    this.isHovering.set(!!interactive);
  }
}
