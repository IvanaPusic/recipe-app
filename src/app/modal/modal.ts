import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../menu';

@Component({
  selector: 'app-modal',
  imports: [RouterLink],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
})
export class Modal {
  menuService = inject(Menu);
}
