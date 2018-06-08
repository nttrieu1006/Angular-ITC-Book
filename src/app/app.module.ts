import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookComponent } from './components/book/book.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BookService } from './services/book.service';
import { HttpModule } from '@angular/http';
import { AddbookComponent } from './components/addbook/addbook.component';
import {MatInputModule,MatFormFieldModule,MatButtonModule,MatDialogModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';

const appRoute: Routes = [
  {
    path:'',
    component:ContentComponent
  },
  {
    path:'book/:id',
    component:BookDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    BannerComponent,
    BookComponent,
    FilterPipe,
    AddbookComponent,
    BookDetailComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(appRoute)
  ],
  entryComponents:[AddbookComponent],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
