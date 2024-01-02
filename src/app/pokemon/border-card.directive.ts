
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})

export class BorderCardDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder('#f5f5f5');
    this.setHeight(320);
    this.setWidth(330);
    this.setBorderRadius(10);
  }
  @Input('appBorderCard') borderColor?: string;
  private setBorder(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }

  private setHeight(height: number) {
    this.renderer.setStyle(this.el.nativeElement, 'height', `${height}px`);
  }

  private setWidth(width: number) {
    this.renderer.setStyle(this.el.nativeElement, 'width', `${width}px`);
  }

  private setBorderRadius(radius: number) {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', `${radius}px`);
  }

  private setBorderColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }
}
