import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent implements OnInit {
  private isDragging = false;
  private initialMouseX = 0;
  private initialTranslateX = 0;
  currentIndex = 0; 
  carouselItems = [
    { title: 'Item 1', imageUrl: 'https://i.pinimg.com/564x/3f/12/0f/3f120f02440e701951ff8a9d73f48a3a.jpg' },
    { title: 'Item 2', imageUrl: 'https://blog.plazavea.com.pe/wp-content/uploads/2022/01/Ceviche.jpg' },
    { title: 'Item 3', imageUrl: 'https://cdn0.recetasgratis.net/es/posts/8/6/2/causa_limena_31268_orig.jpg' },
    { title: 'Item 4', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 5', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 6', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 7', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 8', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 9', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }
  navigate(direction: number) {
    const totalItems = this.carouselItems.length;
    this.currentIndex = (this.currentIndex + direction + totalItems) % totalItems;
  }

  getTransformStyle(): string {
    const translateX = -this.currentIndex * 15; // Ajusta según el ancho de cada elemento
    return `translateX(${translateX}%)`;
  }

  get visibleItems(): any {
    const startIndex = this.currentIndex;
    let endIndex = (this.currentIndex + 3) % this.carouselItems.length;
    const items = this.carouselItems.slice(startIndex, endIndex + 1);

    // Si no hay suficientes elementos visibles, agrega elementos desde el principio
    while (items.length < 3) {
      const nextIndex = (endIndex + 1) % this.carouselItems.length;
      items.push(this.carouselItems[nextIndex]);
      endIndex = nextIndex;
    }

    return items;
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.initialMouseX = event.clientX;
    this.initialTranslateX = this.currentIndex * 5; // Ajusta según el ancho de cada elemento
  }

  drag(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.initialMouseX;
      const newTranslateX = this.initialTranslateX + deltaX;
  
      // Ajusta el índice para que el carrusel sea infinito
      const totalItems = this.carouselItems.length;
      const newIndex = Math.round(newTranslateX / 15);
      this.currentIndex = (newIndex + totalItems) % totalItems;
    }
  }

  endDrag() {
    this.isDragging = false;
  }
}
