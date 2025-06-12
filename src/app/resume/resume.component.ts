import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  openPdf(): void {
    const pdfUrl = 'assets/Mohan-Resume.pdf'; // Path to the PDF file
    window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
  }
}
