import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: Cat[];
  selectedCat: Cat;
  constructor(private catService: CatService) { }

  getCats(): void {
    this.catService.getCats()
      .subscribe(cats => this.cats = cats);
  }

  ngOnInit() {
    this.getCats();
  }
  onCatSelected: Function = (cat: Cat) => {
    this.selectedCat = cat;
  }
}
