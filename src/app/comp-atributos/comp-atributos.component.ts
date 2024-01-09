import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css'],
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'enable';
  corFundo: string = 'blue';
  corFonte: string = 'yellow';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = false;

  constructor() {}

  addLista() {
    this.lista.push(this.item);
  }

  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

  ngOnInit(): void {}
}
