import { Component, OnInit } from '@angular/core';

import { Superpower } from '../superpower';
import { SuperpowerService } from '../superpower.service';

@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: [
    '../heroes/heroes.component.css',
    './superpowers.component.css'
  ]
})
export class SuperpowersComponent implements OnInit {
  superpowers: Superpower[];

  constructor(private superpowerService: SuperpowerService) { }

  ngOnInit() {
    this.getSuperpowers();
  }

  getSuperpowers(): void {
    this.superpowerService.getSuperpowers()
    .subscribe(superpowers => this.superpowers = superpowers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.superpowerService.addSuperpower({ name } as Superpower)
      .subscribe(superpower => {
        this.superpowers.push(superpower);
      });
  }

  delete(superpower: Superpower): void {
    this.superpowers = this.superpowers.filter(h => h !== superpower);
    this.superpowerService.deleteSuperpower(superpower).subscribe();
  }

}
