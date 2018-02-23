import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../cat';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {

  @Input() cat: Cat;
  constructor() { }

  ngOnInit() {
  }

}
