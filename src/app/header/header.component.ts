import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleDrawer = new EventEmitter<boolean>();

  // Track the state of the drawer
  isDrawerOpen = true;

  onToggle() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.toggleDrawer.emit(this.isDrawerOpen);
  }
}
