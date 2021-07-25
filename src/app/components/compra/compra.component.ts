import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Producto } from 'src/app/data/producto.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { ShopService } from 'src/app/services/shop.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  oid: string = "";
  pid: string = ""; //id de producto agregado al carrito
  producto: any;
  cargando: boolean = true;

  constructor(private router: ActivatedRoute, private serviceShop: ShopService ,
    private serviceCarrito: CarritoService , private route:Router) { }

  ngOnInit(): void {
    this.cargando = false;

    this.oid = this.router.snapshot.params.oid;
    this.pid = this.router.snapshot.params.pid;
    console.log(this.oid, this.pid);

this.serviceShop.getProducto(this.oid).subscribe(data=>{
  console.log(data);
  this.producto = data;
  this.cargando = true;
})
  }

  eliminarProducto(){
    swal({
      title: "¿Estas seguro de eliminar?",
      text: "Una vez borrado , no encontraras este producto en tu carrito",
      icon: "warning",
      buttons: ["Cancelar",true],
      className: "swal-overlay",
      dangerMode: true,
      
    })
    .then((willDelete) => {
      if (willDelete) {
        this.serviceCarrito.eliminarProducto(this.pid);
        swal("Poof! El producto ha sido eliminado!", {
          icon: "success",
        })
        
        this.route.navigateByUrl("/carrito");
      } else {
        swal("¡Tu producto esta a salvo!");
      }
    });
  }

}
