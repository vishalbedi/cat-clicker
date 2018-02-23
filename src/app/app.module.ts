import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';

import { CatService } from './cat.service';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatDetailComponent,
    CatEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
