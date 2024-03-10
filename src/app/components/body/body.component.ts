import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  currentSlideIndex = 0;
  banners: string[] = [
    "../../../assets/banner.png",
    "../../../assets/banner.png",
    "../../../assets/banner.png",
  ];


  ngOnInit(): void {
    this.iniciarCarrossel();
  }

  iniciarCarrossel() {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.banners.length;
      document.documentElement.style.setProperty('--currentIndex', this.currentSlideIndex.toString());
    }, 5000);
  }

  redirectToMatricula() {
    window.open('', '_blank');
  }
}