import { Component, computed, Input, signal } from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-side-nav-contents',
  templateUrl: './side-nav-contents.component.html',
  styleUrls: ['./side-nav-contents.component.css']
})
export class SideNavContentsComponent {

  menuItems: MenuItem[] = [
    { icon: 'person', label: 'About', route: 'about' },
    { icon: 'description', label: 'Resume', route: 'resume' },
    { icon: 'category', label: 'Projects', route: 'projects' },
    { icon: 'call', label: 'Contact', route: 'contact' }
  ];

}
