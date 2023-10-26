import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor: string = '0';
  valor1!: number;
  valor2!: number;
  operacao!: number;
  virgula: boolean = false;

  constructor() {}

  adicionarNumero(num: string){
    if(this.visor.length == 1 && this.visor == '0'){
      this.visor = num;
    }else{
      this.visor += num;
    }
  }

  adicionarOperacao(valor: number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.zerar();
  }

  adicionarVirgula(){
    if(!this.virgula){
      this.visor += '.';
      this.virgula = true;
    }
  }

  inverterSinal(){
    if(this.visor != "0"){
      if(this.visor[0] != '-'){
        this.visor = "-" + this.visor;
      }else{
        this.visor = this.visor.slice(1);
      }
    }
  }

  calcular(){
    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0:{
        this.visor = "" + (this.valor1 + this.valor2);
        break;
      }
      case 1:{
        this.visor = "" + (this.valor1 - this.valor2);
        break;
      }
      case 2:{
        this.visor = "" + (this.valor1 * this.valor2);
        break;
      }
      case 3:{
        if(this.valor2 != 0){
          this.visor = "" + (this.valor1 / this.valor2);
        }

        break;
      }
      default:{
        break;
      }
    }
  }

  porcentagem(){
    this.valor2 = +this.visor;
    this.visor = "" + (this.valor2 / 100);
  }

  zerar(){
    this.visor = '0';
    this.virgula = false;
  }
}
