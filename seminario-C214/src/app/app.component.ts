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
  resposta: string;

  constructor() {}

  entradaDados(altura: number, peso: number): number {

    this.imc = parseFloat((peso/(altura*altura)).toFixed(2));

    if(this.imc < 18.5){
      this.resposta = 'Abaixo do peso!';
      return this.imc;
    }
    else if(this.imc >= 18.5 && this.imc <= 24.9) {
      this.resposta = 'Peso normal!';
      return this.imc;
    }
    else if(this.imc >= 25.0 && this.imc <= 29.9) {
      this.resposta = 'Excesso de peso!';
      return this.imc;
    }
    else if(this.imc >= 30.0 && this.imc <= 34.9) {
      this.resposta = 'Obesidade classe I!';
      return this.imc;
    }
    else if(this.imc >= 35.0 && this.imc <= 39.9) {
      this.resposta = 'Obesidade classe II!';
      return this.imc;
    }
    else if(this.imc >= 40.0) {
      this.resposta = 'Obesidade classe III!';
      return this.imc;
    }
    return 0;
  }

}
