import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() autenticado:boolean = false; //por el momento es de lujo
  langs: string[] = [];


  constructor(public translate: TranslateService) { 
    this.translate.setDefaultLang('en');
    /**this.translate.use('es');
    this.translate.addLangs(['es', 'en' , 'pt']);
    this.langs= this.translate.getLangs(); */
  
  }

  ngOnInit(): void {
  }

  logout(){
    
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
