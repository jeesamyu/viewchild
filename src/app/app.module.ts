import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { CpcolorDirective } from './cpcolor.directive';
import { CpthemeComponent } from './cptheme/cptheme.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';
import { UiElementComponent } from './ui-element/ui-element.component';
import { CpcolorParantComponent } from './cpcolor-parant/cpcolor-parant.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    CpcolorDirective,
    CpthemeComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    UiElementComponent,
    CpcolorParantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
