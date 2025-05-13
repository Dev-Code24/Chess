import {Component} from '@angular/core';
import {SidebarNavComponent} from '@/base-sidebar/modules/nav-component/nav-component.component';

@Component({
   selector: 'app-base-sidebar',
   imports: [SidebarNavComponent],
   templateUrl: './base-sidebar.component.html',
   styleUrl: './base-sidebar.component.scss'
})
export class BaseSidebarComponent {

}
