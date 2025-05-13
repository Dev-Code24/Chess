import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BaseSidebarComponent} from './base-sidebar/base-sidebar.component';
import { BaseContainerComponent } from "./base-container/base-container.component";

@Component({
  selector: 'app-root',
   imports: [RouterOutlet, BaseSidebarComponent, BaseContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chess-frontend';
}
