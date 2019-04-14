import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperpowerDetailComponent } from './superpower-detail.component';

describe('SuperpowerDetailComponent', () => {
  let component: SuperpowerDetailComponent;
  let fixture: ComponentFixture<SuperpowerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperpowerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperpowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
