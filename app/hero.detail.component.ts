import {Component, Input} from '@angular/core';
import {Hero} from "./class/hero";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero.detail.html'
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}