import { Router } from '@angular/router';
import { Transferencia } from './../model/transferencia';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  title = 'bytebank';
  valor: number = 0;
  destino: number = 0;

  constructor(private service:TransferenciaService, private router: Router){

  }

  transferir() {
    const transf: Transferencia = {valor: this.valor, destino: this.destino};

    this.service.transferir(transf).subscribe(
      (resultado) => {
        this.router.navigateByUrl("extrato");
      },
      (error) => {
        console.error("Ocorreu um erro na transferência!");
      });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
