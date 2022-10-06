import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  altura: number;
  peso: number;
  imc: number;

  constructor() {}

  entradaDados(altura: number, peso: number) {
    this.imc = peso/(altura*altura);
    if(this.imc < 18.5){
      alert('Abaixo do peso!');
    }
    else if(this.imc >= 18.5 && this.imc <= 24.9) {
      alert('Peso normal!');
    }
    else if(this.imc >= 25.0 && this.imc <= 29.9) {
      alert('Excesso de peso!');
    }
    else if(this.imc >= 30.0 && this.imc <= 34.9) {
      alert('Obesidade classe I!');
    }
    else if(this.imc >= 35.0 && this.imc <= 39.9) {
      alert('Obesidade classe II!');
    }
    else if(this.imc >= 40.0) {
      alert('Obesidade classe III!');
    }

  }

}
