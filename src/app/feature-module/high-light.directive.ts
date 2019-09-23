import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private mouseRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.cChange('green');
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.cChange(null);
  }

  private cChange(cl: string)
  {
    this.mouseRef.nativeElement.style.background = cl;
  }

}
