import { LightningElement, track } from "lwc";

export default class App extends LightningElement {
  //title = "Welcome to Lightning Web Components!";

  //showFeatures = true;

  @track numero1;
  @track numero2;
  resultado;

  mudouN1 (event){
    this.numero1=Number(event.target.value);
  }
mudouN2 (event){
    this.numero2=Number(event.target.value);
  }
  soma (){
    this.resultado=this.numero1+this.numero2;
  }
   sub (){
    this.resultado=this.numero1-this.numero2;
  }  div (){

    this.resultado=this.numero1/this.numero2;
  } mult (){
    this.resultado=this.numero1*this.numero2;
  }limpar(){
    this.resultado=null;
  }


}
