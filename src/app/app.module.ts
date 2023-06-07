import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CloverComponent } from './clover/clover.component';
import { CountryListComponent } from './country-list/country-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { UsdINRPipe } from './pipes/usd-inr.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    HeaderComponent,
    ChildComponent,
    UsdINRPipe,
  ],
  //  FormsModule for two way data binding
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
