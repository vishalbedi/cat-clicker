import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
import { CATS } from '../mock-cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: Cat[] = CATS;
  selectedCat: Cat = this.cats[0];
  constructor() { }

  ngOnInit() {
  }

  onCatSelected: void (cat: Cat)  {
    this.selectedCat = cat;
  }

  clickHandler: void (cat: Cat)  {
    cat.clickCounter++;
  }
}
