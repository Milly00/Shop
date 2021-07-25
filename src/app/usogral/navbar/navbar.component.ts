import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() autenticado:boolean = false; //por el momento es de lujo

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    
  }

}
