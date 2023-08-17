import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox-group/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxGroupComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
