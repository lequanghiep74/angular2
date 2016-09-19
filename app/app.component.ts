import {Component, OnInit} from '@angular/core';
import {Hero} from './class/hero';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/hero.html',
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    selectedHero: Hero;
    title = 'Tour of Heroes';
    heroes: Hero[];

    constructor(private heroService: HeroService) {};

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
}