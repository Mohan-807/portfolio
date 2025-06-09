import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavContentsComponent } from './side-nav-contents.component';

describe('SideNavContentsComponent', () => {
  let component: SideNavContentsComponent;
  let fixture: ComponentFixture<SideNavContentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavContentsComponent]
    });
    fixture = TestBed.createComponent(SideNavContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
