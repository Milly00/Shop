import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/data/carrito.interface';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Carrito[] = [];
  id: string = "";
  cargando:boolean = false;

  constructor(private service: CarritoService) { }

  ngOnInit(): void {
this.cargando = false;
    this.service.getItems().subscribe(data=>{
      console.log(data);
      this.productos = data;
      this.cargando = true;
      
    })
    
  }

}
