import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { Superpower } from '../superpower';
import { HeroService }  from '../hero.service';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  superpowers: Superpower[];
  heroSuperpower: number;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private superpowerService: SuperpowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.getSuperpowers();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  getSuperpowers(): void {
    this.superpowerService.getSuperpowers()
    .subscribe(superpowers => this.superpowers = superpowers);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    if (this.heroSuperpower) {
       if (!this.hero.superpowers) {
         this.hero.superpowers = [];
       }
      const selectedPower = this.superpowers.find(power => power.id == this.heroSuperpower)
      this.hero.superpowers.push(selectedPower);
    }
    this.heroService.updateHero(this.hero)
      .subscribe();
  }
}
