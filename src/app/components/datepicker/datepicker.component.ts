import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales, defineLocale } from 'ngx-bootstrap/chronos';

import { esLocale, frLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
defineLocale('fr', frLocale);

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styles: []
})
export class DatepickerComponent implements OnInit {

  locale = 'es';
  locales = listLocales();
  today = new Date();
  maxDate = new Date();
  rangeDate: Date[];

  colorTheme = 'theme-default';
  bsConfig: Partial<BsDatepickerConfig> = {
    'dateInputFormat': 'YYYY-MM-DD',
    containerClass: this.colorTheme
  };

  constructor(private localeService: BsLocaleService) {
    this.localeService.use(this.locale);

    console.log(this.locales);

    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.rangeDate = [this.today, this.maxDate];
  }

  ngOnInit() {
  }

}
