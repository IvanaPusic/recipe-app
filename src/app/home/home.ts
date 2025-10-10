import { Component } from '@angular/core';
import { Banner } from '../banner/banner';
import { BenefitsSection } from '../benefits-section/benefits-section';
import { Overview } from '../overview/overview';
import { CallToAction } from '../call-to-action/call-to-action';

@Component({
  selector: 'app-home',
  imports: [Banner, BenefitsSection, Overview, CallToAction],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
