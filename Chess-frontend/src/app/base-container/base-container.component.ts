import { Component } from '@angular/core';
import { BaseContainerHeaderComponent } from "./modules/header/header.component";

@Component({
  selector: 'app-base-container',
  imports: [BaseContainerHeaderComponent],
  templateUrl: './base-container.component.html',
  styleUrl: './base-container.component.scss'
})
export class BaseContainerComponent {

}
