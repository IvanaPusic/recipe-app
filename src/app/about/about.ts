import { Component } from '@angular/core';
import { AboutHero } from '../about-hero/about-hero';
import { PhilosophySection } from '../philosophy-section/philosophy-section';
import { PurposeSection } from '../purpose-section/purpose-section';
import { CallToAction } from '../call-to-action/call-to-action';
import { PlateSection } from '../plate-section/plate-section';

@Component({
  selector: 'app-about',
  imports: [
    AboutHero,
    PhilosophySection,
    PurposeSection,
    CallToAction,
    PlateSection,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
