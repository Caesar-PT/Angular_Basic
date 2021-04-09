import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetComponent } from './pet/pet.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { HackernewsComponent } from './hackernews/hackernews.component';
import { LikesComponent } from './likes/likes.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FontSizeEditorComponent,
    PetComponent,
    ColorPickerComponent,
    CountdownTimerComponent,
    HackernewsComponent,
    LikesComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
