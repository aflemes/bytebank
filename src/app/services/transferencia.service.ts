import { HttpClient } from '@angular/common/http';
import { Transferencia } from './../model/transferencia';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransf: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransf = [];
  }

  get transferencia(){
    return this.listaTransf;
  }

  getAll(){
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  transferir(transf: any){
    const auxiliar = {...transf,data: new Date()};
    //this.listaTransf.push(auxiliar);
    return this.httpClient.post<Transferencia>(this.url, auxiliar);
  }
}
