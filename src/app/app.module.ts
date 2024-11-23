import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { DesignationdisplayComponent } from './designationdisplay/designationdisplay.component';
import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { DataService } from './data.service';
import { ToastsContainerComponent } from './toasts-container/toasts-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignationdisplayComponent,
    ToastsContainerComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    NgbToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
