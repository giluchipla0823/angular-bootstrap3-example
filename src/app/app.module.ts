import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  exports: [ModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
