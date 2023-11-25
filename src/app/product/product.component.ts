import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  starImage:string = "../assets/images/star.svg"

  listaDeItens: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  repeat: number[] = [1, 2, 3, 4, 5];

  textTestimonial = "As soon as the Clarifions arrived I put one in my bedroom. Thiswas late in the afternoon. When I went to the bedroom in theevening it smelled clean. When I went to bed I felt I could breathe better. Wonderful."
}
