import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('dropdownList') list: ElementRef;
  isOpen = false;
  constructor(private renderer: Renderer2) {}
  openToggle() {
    this.isOpen = !this.isOpen;
    this.isOpen
      ? this.renderer.addClass(this.list.nativeElement, 'show')
      : this.renderer.removeClass(this.list.nativeElement, 'show');
  }
}
