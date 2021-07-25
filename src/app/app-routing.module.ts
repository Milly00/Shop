import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CompraComponent } from './components/compra/compra.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { GeneralComponent } from './components/general/general.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: "inicio" , component: InicioComponent},
{path: 'home', component: HomeComponent},
{path: 'general' , component: GeneralComponent},
{path: 'detalle/:id' , component: DetalleProductoComponent},
{path: 'login' , component: LoginComponent} , 
{path: 'registro' , component: RegistroComponent},
{path: 'compra/:oid/:pid' , component: CompraComponent} , 
{path: 'carrito' , component: CarritoComponent},
{ path: '**', pathMatch: 'full' , redirectTo: 'inicio'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
