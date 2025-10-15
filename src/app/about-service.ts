import { Injectable, signal } from '@angular/core';
import { aboutUs, foodPhilosophy, plate } from './mock-data/mock-data';
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  about = signal(aboutUs);
  food = signal(foodPhilosophy);
  ourPlate = signal(plate);

  getAllData() {
    const data = { about: this.about, food: this.food, plate: this.ourPlate };
    console.log(data);
    return data;
  }
}
