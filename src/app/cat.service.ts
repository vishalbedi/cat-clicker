import { Injectable } from '@angular/core';
import { Cat } from '.cat';
import { CATS } from '.mock-cats';

@Injectable()
export class CatService {

  constructor() { }
  getCats(): Cat[] {
    return CATS;
  }
}
