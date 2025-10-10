import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Menu {
  isModalOpen = signal(false);

  toggleModal() {
    this.isModalOpen.update((val) => !val);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
