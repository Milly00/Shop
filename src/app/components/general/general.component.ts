import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/data/producto.interface';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

productos : Producto[] = [];
cargando: boolean = false;

  constructor(private service: ShopService) {

    /** 
    this.service.cargarProductos().subscribe(data=>{
      this.productos = data;
      console.log(this.productos);
    })*/
   }

  ngOnInit(): void {
    this.cargando = false;
this.service.getProductos().subscribe(data=>{
  this.productos = data;
  this.cargando = true;
  console.log(this.productos)
})
    
  }

}
