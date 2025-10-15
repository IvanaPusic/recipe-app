import { Component, inject, OnInit } from '@angular/core';
import { AboutService } from '../about-service';

@Component({
  selector: 'app-philosophy-section',
  imports: [],
  templateUrl: './philosophy-section.html',
  styleUrl: './philosophy-section.scss',
})
export class PhilosophySection implements OnInit {
  aboutService: AboutService = inject(AboutService);
  food = this.aboutService.food();
  ngOnInit(): void {
    console.log('Food', this.food);
  }
}
