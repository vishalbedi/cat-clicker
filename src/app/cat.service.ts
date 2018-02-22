import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { CATS } from './mock-cats';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class CatService {

  constructor() { }
  getCats(): Observable<Cat[]> {
    return of(CATS);
  }
}
