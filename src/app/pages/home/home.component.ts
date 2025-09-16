import { Component } from '@angular/core';
import { SampleComponent } from '../../shared/sample/sample.component';

@Component({
  selector: 'app-home',
  imports: [SampleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
