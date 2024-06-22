import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodPlanComponent } from './food-plan/food-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    FoodListComponent,
    FoodPlanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
