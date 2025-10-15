import { Component, inject } from '@angular/core';
import { AboutService } from '../about-service';

@Component({
  selector: 'app-plate-section',
  imports: [],
  templateUrl: './plate-section.html',
  styleUrl: './plate-section.scss',
})
export class PlateSection {
  aboutService: AboutService = inject(AboutService);
  plates = this.aboutService.ourPlate();
}
