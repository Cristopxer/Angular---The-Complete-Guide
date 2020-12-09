import { Component, EventEmitter, Output, Renderer2, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @ViewChild('dropdownList') list: ElementRef;
  isOpen = false;

  @Output() featureSelected = new EventEmitter<string>();

    constructor(private renderer: Renderer2){}

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  openToggle() {
    this.isOpen = !this.isOpen;
    this.isOpen
      ? this.renderer.addClass(this.list.nativeElement, 'show')
      : this.renderer.removeClass(this.list.nativeElement, 'show');
  }
}
