import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralComponent } from './components/general/general.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CompraComponent } from './components/compra/compra.component';
import { FooterComponent } from './usogral/footer/footer.component';
import { NavbarComponent } from './usogral/navbar/navbar.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';

import swal from 'sweetalert';

//Translation
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationComponent } from './translation/translation.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    GeneralComponent,
    CarritoComponent,
    CompraComponent,
    FooterComponent,
    NavbarComponent,
    DetalleProductoComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
