import { Component } from '@angular/core';
import { AboutHero } from '../about-hero/about-hero';

@Component({
  selector: 'app-about',
  imports: [AboutHero],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
