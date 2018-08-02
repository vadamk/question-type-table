import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppComponent } from './app.component';
import { Autosize } from './directives/autosize.directive';
import { QTableComponent } from './components/q-table/q-table.component';

@NgModule({
  declarations: [
    AppComponent,
    Autosize,
    QTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    SelectButtonModule,
    LoadingBarHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
