import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  nome:string = "Daniel"
  idade:number=22;
  trabalho:string = "Sei la, quero ganhar 1 milhão por ano"
  hobbies = ['Futebol', 'Amassar otario no TFT', 'Cozinhar'];
  carro = {marca: "Porsche", modelo: "911"}

}
