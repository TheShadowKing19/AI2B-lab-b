import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max: number): number {
    let min = 1
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
