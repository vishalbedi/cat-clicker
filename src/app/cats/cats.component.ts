import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

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

  onCatSelected: void (cat: Cat)  {
    this.selectedCat = cat;
  }

  clickHandler: void (cat: Cat)  {
    cat.clickCounter++;
  }
}
