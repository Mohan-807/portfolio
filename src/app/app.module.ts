import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SideNavContentsComponent } from './side-nav-contents/side-nav-contents.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButton, MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    SideNavContentsComponent,
    ProjectsComponent,
    HeaderComponent
  ],
  imports: [MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
