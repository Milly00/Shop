import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'Shop';
    langs: string[] = [];
  
    constructor(public translate: TranslateService){
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

        changeLang(lang: string) {
          this.translate.use(lang);
        }
  
}
