import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionsComponent } from './features/suggestions/list-suggestions/list-suggestions.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ //les composants liés à ce module
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [ //les packages dont on a besoin dans ce module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()], //pour pouvoir utiliser HttpClient dans l'application
  bootstrap: [AppComponent]
})
export class AppModule { }
