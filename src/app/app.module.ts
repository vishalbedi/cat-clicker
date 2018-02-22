import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';

import { CatService } from './cat.service';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
