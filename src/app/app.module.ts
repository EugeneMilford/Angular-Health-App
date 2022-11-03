import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FoodsComponent } from './foods/foods.component';
import { SleepComponent } from './sleep/sleep.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { FoodsListComponent } from './foods/foods-list/foods-list.component';
import { FoodsEditComponent } from './foods/foods-edit/foods-edit.component';
import { SleepScheduleComponent } from './sleep/sleep-schedule/sleep-schedule.component';
import { SleepEditComponent } from './sleep/sleep-edit/sleep-edit.component';
import { ExerciseEditComponent } from './exercise/exercise-edit/exercise-edit.component';
import { ExerciseScheduleComponent } from './exercise/exercise-schedule/exercise-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomeComponent,
    FoodsComponent,
    SleepComponent,
    ExerciseComponent,
    FoodsListComponent,
    FoodsEditComponent,
    SleepScheduleComponent,
    SleepEditComponent,
    ExerciseEditComponent,
    ExerciseScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
