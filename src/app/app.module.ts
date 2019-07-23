import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [ModalModule, BsDatepickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
