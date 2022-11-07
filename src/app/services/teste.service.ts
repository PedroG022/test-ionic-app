import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
  private frutas: Array<string> = ["Maçã", "Banana", "Pera"]

  public getFrutas(): Array<string> {
    return this.frutas
  }

  public add(fruta: string) {
    console.log(fruta)
    this.frutas.push(fruta)
  }

  constructor() { }
}
