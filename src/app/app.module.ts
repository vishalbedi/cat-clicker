import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';

import { CatService } from './cat.service';
import { CatDetailComponent } from './cat-detail/cat-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
