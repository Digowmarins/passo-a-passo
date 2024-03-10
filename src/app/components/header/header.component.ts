import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  reloadPage() {
    window.location.reload();
  }

  toggleMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      const menu = document.querySelector('.options-mobile') as HTMLElement;
      menu.style.display = 'block';
    } else {
      setTimeout(() => {
        const menu = document.querySelector('.options-mobile') as HTMLElement;
        menu.style.display = 'none';
      }, 450); // Tempo de espera, ajuste conforme a duração da animação
    }
  }


  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }


  redirectToFacebook() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const facebookUrl = isMobile ? '' : '';
    window.open(facebookUrl, '_blank');
  }


  scrollToElementAndCloseMenu(id: string) {
    this.scrollToElement(id);
    this.toggleMenuOpen();
  }
}
