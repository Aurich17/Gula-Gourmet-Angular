import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent implements OnInit {
  currentIndex = 0; 
  carouselItems = [
    { title: 'Item 1', imageUrl: '...' },
    { title: 'Item 2', imageUrl: '...' },
    { title: 'Item 2', imageUrl: '...' },
    { title: 'Item 2', imageUrl: '...' },
    { title: 'Item 2', imageUrl: '...' },
    { title: 'Item 2', imageUrl: '...' },
    // Agrega más elementos según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }
  navigate(direction: number) {
    // Actualiza el índice actual según la dirección (izquierda o derecha)
    this.currentIndex += direction;
    // Asegúrate de que el índice no se salga de los límites del arreglo de elementos
    const totalItems = this.carouselItems.length;
    if (this.currentIndex < 0) {
      this.currentIndex = totalItems - 1;
    } else if (this.currentIndex >= totalItems) {
      this.currentIndex = 0;
    }
  }
}
