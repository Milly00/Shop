import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import {Producto} from "../data/producto.interface";
import {  map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private productColection : AngularFirestoreCollection<Producto>;
  products: Observable<Producto[]>;


  constructor( private afs: AngularFirestore) { 
    this.productColection = afs.collection<Producto>('producto');
    this.products = this.productColection.valueChanges();
  }

  cargarProductos(){
    return this.products;
  }

  getProductos(): Observable<Producto[]>{
    
    return this.afs.collection('producto').snapshotChanges().pipe(map(datos=>{
      return datos.map((resp)=>{
        const data = resp.payload.doc.data() as Producto;
        const oid = resp.payload.doc.id;

        return {oid,...data};
      })
    }))
  }

  getProducto(id : string ){
return this.afs.doc(`producto/${id}`).valueChanges();
  }
}
