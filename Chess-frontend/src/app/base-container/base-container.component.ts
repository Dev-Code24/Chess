import { Component } from '@angular/core';
import { BaseContainerHeaderComponent } from "./modules/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-container',
  imports: [BaseContainerHeaderComponent, RouterOutlet],
  templateUrl: './base-container.component.html',
  styleUrl: './base-container.component.scss'
})
export class BaseContainerComponent {

}
