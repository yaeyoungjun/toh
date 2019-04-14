import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Superpower }         from '../superpower';
import { SuperpowerService }  from '../superpower.service';

@Component({
  selector: 'app-superpower-detail',
  templateUrl: './superpower-detail.component.html',
  styleUrls: [ './superpower-detail.component.css' ]
})
export class SuperpowerDetailComponent implements OnInit {
  @Input() superpower: Superpower;

  constructor(
    private route: ActivatedRoute,
    private superpowerService: SuperpowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSuperpower();
  }

  getSuperpower(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.superpowerService.getSuperpower(id)
      .subscribe(superpower => this.superpower = superpower);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.superpowerService.updateSuperpower(this.superpower)
      .subscribe(() => this.goBack());
  }
}
