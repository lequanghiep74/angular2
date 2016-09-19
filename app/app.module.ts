import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HeroDetailComponent} from "./components/hero.detail/hero.detail.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroService} from "./components/service/hero.service";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {routing} from "./app.routing";
import {MainComponent} from "./components/main/main.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        MainComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [MainComponent]
})

export class AppModule {
}