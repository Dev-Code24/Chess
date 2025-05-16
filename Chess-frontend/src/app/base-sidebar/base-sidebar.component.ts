import { AfterViewInit, Component, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { sidenavLinkButtons } from '@/base-sidebar/@core/utils/sidenav-button';
import { type HoverStateKeys } from '@/base-sidebar/modules/shared-module/sidebar-types';
import { ButtonLinkComponent } from '@/shared/button-link/button-link.component';
import { SidebarNavPanelComponentComponent } from '@/base-sidebar/modules/nav-panel-component/nav-panel-component.component';
import { GlobalStateManagerService } from '@/services/global-state-manager/global-state-manager.service';

@Component({
   selector: 'app-base-sidebar',
   imports: [ButtonLinkComponent, SidebarNavPanelComponentComponent],
   templateUrl: './base-sidebar.component.html',
   styleUrl: './base-sidebar.component.scss'
})
export class BaseSidebarComponent implements AfterViewInit {
   @ViewChild('sb') sbRef!: ElementRef<HTMLElement>;

   private globalStateManagerService = inject(GlobalStateManagerService);
   private sink: Subscription[] = [];
   protected readonly buttonLinks = sidenavLinkButtons;
   protected hoverState = signal<Record<HoverStateKeys, boolean>>({
      play: false,
      puzzles: false,
      learn: false,
      watch: false,
      news: false,
      social: false,
   });
   protected isMobileSidebarOpen = this.globalStateManagerService.isMobileSidebarOpen;

   ngAfterViewInit() {
      this.sink.push(this.globalStateManagerService.sidebarOpen.subscribe((isOpen) => {
         this.toggleSidebar(isOpen, window.innerWidth);
      }));

      const resizeListener = () => {
         const isOpen = this.globalStateManagerService.isMobileSidebarOpen;
         this.toggleSidebar(isOpen, window.innerWidth);
      };
      window.addEventListener('resize', resizeListener);

      this.sink.push({
         unsubscribe: () => window.removeEventListener('resize', resizeListener)
      } as Subscription);
   }

   private toggleSidebar(isOpen: boolean, width: number): void {
      const sidebar = this.sbRef.nativeElement;
      if (sidebar) {
         sidebar.style.display = width < 960 ? isOpen ? 'flex' : 'none' : 'flex';
      }
   }
   protected onButtonHover(event: boolean, title: string): void {
      const loTitle = title.toLowerCase();
      this.hoverState.update((old) => ({ ...old, [loTitle]: event }));
   }
   protected getHoverState(title: string): boolean {
      return this.hoverState()[title.toLowerCase() as HoverStateKeys];
   }
   protected onCloseClick() {
      this.globalStateManagerService.toggleMobileSidebar();
   }

   ngOnDestroy(): void {
      this.sink.forEach((subscription) => subscription.unsubscribe());
   }
}
