import { Component, inject, OnInit, signal } from '@angular/core';
import { AboutService } from '../about-service';

@Component({
  selector: 'app-purpose-section',
  imports: [],
  templateUrl: './purpose-section.html',
  styleUrl: './purpose-section.scss',
})
export class PurposeSection implements OnInit {
  aboutService: AboutService = inject(AboutService);
  purposeVar = this.aboutService.about();

  ngOnInit() {
    console.log(this.purposeVar);
  }
}
