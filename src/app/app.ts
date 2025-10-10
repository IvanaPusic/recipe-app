import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { Footer } from './footer/footer';
import { Modal } from './modal/modal';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Footer, Modal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  menuService = inject(Menu);
}
