import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  public activeLang = 'es';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {

    this.translate.setDefaultLang(this.activeLang);
  }

  public cambiarLenguaje(lang:any) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
