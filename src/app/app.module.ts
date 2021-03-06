import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeatureModuleModule } from './feature-module/feature-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FeatureModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
