import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat';
@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  cat: Cat;
  constructor() { }

  ngOnInit() {
  }

}
