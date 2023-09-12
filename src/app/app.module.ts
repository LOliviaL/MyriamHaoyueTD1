import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarreComponent } from './carre/carre.component';
=======
import { FooterComponent } from './footer/footer.component';
>>>>>>> 932fbc16bba33f3cd183d90eee067d5a27cc4f9b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent,
    CarreComponent
=======
    FooterComponent
>>>>>>> 932fbc16bba33f3cd183d90eee067d5a27cc4f9b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
