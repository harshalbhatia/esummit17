import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerListComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
