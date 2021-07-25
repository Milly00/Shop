import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  langs: string[] = [];

  constructor(private service: AuthService , public translate: TranslateService) { 
    this.translate.setDefaultLang('en');
    this.translate.use('es');
    this.translate.addLangs(['es', 'en' , 'pt']);
    this.langs = this.translate.getLangs();
    translate.get('HELLO')
          .subscribe((res: string) => {
                console.log(res);
  //=> 'hello world'
              });
  }

  ngOnInit(): void {
  }

  loginGoogle(){
    this.service.login();
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }

}
