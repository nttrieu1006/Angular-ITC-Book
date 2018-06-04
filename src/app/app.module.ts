import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { BannerComponent } from './components/banner/banner.component';
import { BookComponent } from './components/book/book.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BookService } from './services/book.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    BannerComponent,
    BookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
