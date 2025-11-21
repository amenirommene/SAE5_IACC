import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionsComponent } from './core/list-suggestions/list-suggestions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ //les composants liés à ce module
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionsComponent
  ],
  imports: [ //les packages dont on a besoin dans ce module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
