import {
  Component,
  Renderer2,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('dropdownList') list: ElementRef;
  isOpen = false;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private renderer: Renderer2,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
  }

  openToggle() {
    this.isOpen = !this.isOpen;
    this.isOpen
      ? this.renderer.addClass(this.list.nativeElement, 'show')
      : this.renderer.removeClass(this.list.nativeElement, 'show');
  }
  onSaveData() {
    this.dataStorageService.storeRecipe();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
