import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from 'src/app/data/producto.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { ShopService } from 'src/app/services/shop.service';
import  swal from 'sweetalert';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;
  id: string = "";
  nombreProducto: string = "";
  cargando: boolean = false;

  constructor( private route:ActivatedRoute , private service: ShopService , private serviceC:CarritoService,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.cargando = false;
    console.log(this.id);

    this.service.getProducto(this.id).subscribe(data=>{
      this.producto = data;
      this.nombreProducto = this.producto.nam;
      this.cargando = true;
      console.log(this.nombreProducto);
    })

  }

  addCarrito(){
    swal({
      title: "¿Estas seguro de agregar este producto a tu carrito?",
      text: "Una vez agregado , podras encontrar este producto en los elementos del carrito",
      icon: "warning",
      buttons: ["Cancelar",true],
      className: "swal-overlay",
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        console.log(this.nombreProducto, this.id)
this.serviceC.addCarrito(this.nombreProducto, this.id);
        swal("Poof! El producto ha sido agregado!", {
          icon: "success",
        })
        
        this.router.navigateByUrl("/carrito");
      } else {
        swal("Se ha cancelado la acción");
      }
    });
    
  }

}
