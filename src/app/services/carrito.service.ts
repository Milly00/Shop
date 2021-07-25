import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import {  map } from "rxjs/operators";
import {Carrito} from "../data/carrito.interface";
import { Producto } from '../data/producto.interface';
import { ShopService } from './shop.service';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoCollection : AngularFirestoreCollection<Carrito>;
  items : Observable<Carrito[]>;

  constructor(private afs : AngularFirestore , private serviceP:ShopService) {

    this.carritoCollection = afs.collection<Carrito>('carrito');
    this.items = this.carritoCollection.valueChanges();
   }

   getItems(): Observable<Carrito[]>{
     return this.afs.collection('carrito').snapshotChanges().pipe(map(datos=>{
       return datos.map((resp)=>{
         const data = resp.payload.doc.data() as Carrito;
         const idc = resp.payload.doc.id;

         return {idc,...data}
       })
     }))
   }

   mostrarProducto(id:string){
this.serviceP.getProducto(id);
   }

   addCarrito(nombre:string, id:string){
const data: Carrito={
  nombre: nombre,
  oid: id
}

this.carritoCollection.add(data);
   }

   eliminarProducto(id:string ){
     this.afs.collection('carrito').doc(`${id}`).delete();
   }
}
