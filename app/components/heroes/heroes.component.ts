import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Hero} from "../../class/hero";
import {Router} from "@angular/router";
import {HeroService} from "../service/hero.service";

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/resource/css/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}