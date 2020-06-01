import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
})
export class HoverStyleDirective {
  constructor(private rend: Renderer2, private ref: ElementRef) {}

  @HostListener('mouseenter') enter(event: Event) {
    this.rend.setStyle(
      this.ref.nativeElement,
      'background-color',
      'var(--secondary-color)'
    );
  }

  @HostListener('mouseleave') leave(event: Event) {
    this.rend.setStyle(
      this.ref.nativeElement,
      'background-color',
      'transparent'
    );
  }
}
