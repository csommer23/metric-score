import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  total: number = 0;
  totalPessoas: number = 0;
  totalProcessos: number = 0;
  totalTecnologia: number = 0;

  addTotal() {
    this.total++;
  }

  onClickPessoas() {
    this.totalPessoas++;
    this.addTotal();
  }

  onClickProcessos() {
    this.totalProcessos++;
    this.addTotal();
  }

  onClickTecnologia() {
    this.totalTecnologia++;
    this.addTotal();
  }
}
