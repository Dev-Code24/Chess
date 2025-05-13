import {Component, input, output} from '@angular/core';

@Component({
  selector: 'app-button-link',
  imports: [],
  templateUrl: './button-link.component.html',
  styleUrl: './button-link.component.scss'
})
export class ButtonLinkComponent{
   href = input.required<string>();
   moreClasses = input<string>();
   isHovered = output<boolean>();

   protected onMouseEnter (): void {
      this.isHovered.emit(true);
   }
   protected onMouseLeave (): void {
      this.isHovered.emit(false);
   }
}
