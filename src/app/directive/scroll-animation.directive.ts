import {
  Directive,
  ElementRef,
  NgModule,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  scrollHeight: number;
  distance: number;
  elementPosition: any;

  setStyle() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `scale(1.1)`
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      'transform .5s ease-in-out'
    );
  }

  ngOnInit(): void {
    document.addEventListener('scroll', () => {
      this.scrollHeight = window.innerHeight;

      this.elementPosition = this.element.nativeElement.getBoundingClientRect().bottom;

      this.distance = this.elementPosition - this.scrollHeight;

      if (this.distance < 0) {
        this.setStyle();
      }
    });
  }
}
