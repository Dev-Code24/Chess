import {Component, computed, input, signal} from '@angular/core';
import {linkButtonsInterface} from '@/base-sidebar/@core/utils/sidenav-button';
import {ButtonLinkComponent} from '@/shared/button-link/button-link.component';

@Component({
   selector: 'sidebar-nav-panel-component',
   imports: [
      ButtonLinkComponent
   ],
   templateUrl: './nav-panel-component.component.html',
   styleUrl: './nav-panel-component.component.scss'
})
export class SidebarNavPanelComponentComponent {
   public navPanelButtonLinks = input.required<linkButtonsInterface[]>();
   public isVisible = input<boolean>(false);
   public isHovered = signal<boolean>(false);
   public readonly styleClass = computed<Record<string, string>>(() => ({
      display: this.isVisible() || this.isHovered() ? 'block' : 'none',
   }))

   protected onMouseEnterOrLeave(): void {
      this.isHovered.update((old) => !old);
   }

}
