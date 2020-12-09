import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen:boolean = false;
  // @HostListener('document:click',['$event']) toggleOpen(event: Event){
  //     this.isOpen = this.elRef.nativeElement.contains(event.target)? !this.isOpen : false;
  // }

  @ViewChild('dropdownList') list: ElementRef;
  isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.renderer.addClass(this.list.nativeElement,'show') : this.renderer.removeClass(this.list.nativeElement,'show');    
  }

  constructor(private renderer: Renderer2) {}
}
