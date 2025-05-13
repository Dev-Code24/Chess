import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class GlobalStateManagerService {
   private sidebarOpenSubject = new BehaviorSubject<boolean>(false);
   public sidebarOpen = this.sidebarOpenSubject.asObservable();

   constructor() {}

   public toggleMobileSidebar(): void {
      const isSidebarOpen = this.sidebarOpenSubject.value;
      this.sidebarOpenSubject.next(!isSidebarOpen);
   }
   public get isMobileSidebarOpen(): boolean {
      return this.sidebarOpenSubject.value;
   }
}
