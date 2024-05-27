import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-component',
  templateUrl: './carrusel-component.component.html',
  styleUrls: ['./carrusel-component.component.css']
})
export class CarruselComponentComponent implements OnInit {
  currentIndex = 0; 
  carouselItems = [
    { title: 'Item 1', imageUrl: 'https://i.pinimg.com/564x/3f/12/0f/3f120f02440e701951ff8a9d73f48a3a.jpg' },
    { title: 'Item 2', imageUrl: 'https://blog.plazavea.com.pe/wp-content/uploads/2022/01/Ceviche.jpg' },
    { title: 'Item 2', imageUrl: 'https://cdn0.recetasgratis.net/es/posts/8/6/2/causa_limena_31268_orig.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
    { title: 'Item 2', imageUrl: 'https://i.ytimg.com/vi/sWXRJbGi6yQ/maxresdefault.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }
  navigate(direction: number) {
    const totalItems = this.carouselItems.length;
    let newIndex = this.currentIndex + direction;
  
    // Ajusta el índice para que sea positivo y no exceda el rango de elementos
    if (newIndex < 0) {
      newIndex = totalItems - 1;
    } else if (newIndex >= totalItems) {
      newIndex = 0;
    }
  
    this.currentIndex = newIndex;
  }

  getTransformStyle(): string {
    const translateX = -this.currentIndex * 100; // Ajusta según el ancho de cada elemento
    return `translateX(${translateX}%)`;
  }

  get visibleItems(): any{
    const startIndex = this.currentIndex;
    const endIndex = (this.currentIndex + 3) % this.carouselItems.length;
    return this.carouselItems.slice(startIndex, endIndex + 1);
  }
}
