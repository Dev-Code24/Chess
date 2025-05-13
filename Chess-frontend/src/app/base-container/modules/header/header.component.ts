import { Component, inject } from '@angular/core';
import { ButtonLinkComponent } from '@/shared/button-link/button-link.component';
import { GlobalStateManagerService } from '@/services/global-state-manager/global-state-manager.service';

@Component({
   selector: 'base-container-header',
   imports: [ButtonLinkComponent],
   templateUrl: './header.component.html',
   styleUrl: './header.component.scss',
})
export class BaseContainerHeaderComponent {
   private globalStateManagerService = inject(GlobalStateManagerService);

   public onClick(): void {
      this.globalStateManagerService.toggleMobileSidebar();
   }
}
