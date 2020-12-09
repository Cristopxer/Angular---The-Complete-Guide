import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  @ViewChild('dropdownList') list: ElementRef;
  isOpen = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  openToggle(){
    this.isOpen = !this.isOpen;
    this.isOpen? this.renderer.addClass(this.list.nativeElement,'show') : this.renderer.removeClass(this.list.nativeElement,'show');

  }
}
