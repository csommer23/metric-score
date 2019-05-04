import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      maxPercent: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: "#4882c2",
      outerStrokeGradientStopColor: "#53a9ff",
      innerStrokeColor: "#e7e8ea",
      animationDuration: 300,   
      responsive: true,
      space: -10,
      titleFontSize: "30",
      unitsFontSize: "20",
      showSubtitle: true,
      subtitleFontSize: "20",
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ScoreComponent]
})
export class AppModule { }
