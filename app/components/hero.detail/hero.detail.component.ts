import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../class/hero";
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "../service/hero.service";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero.detail/hero.detail.html',
    styleUrls: ['app/resource/css/hero.detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    @Input()
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    goBack(): void {
        window.history.back();
    }
}