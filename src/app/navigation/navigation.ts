import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../menu';
@Component({
  selector: 'app-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  modalService = inject(Menu);
}
