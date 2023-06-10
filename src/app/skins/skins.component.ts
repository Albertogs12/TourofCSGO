import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Skin } from '../Skin';
import { CSGOService } from '../counter.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css'],
})
export class SkinsComponent implements OnInit {
  constructor(private csgoService: CSGOService) {}

  offset: number = 0;
  allSkins: Skin[] = [];

  getSkins() {
    this.csgoService.getSkins();
    // .subscribe((skins: Skin[]) => (this.allSkins = skins));
  }

  ngOnInit(): void {
    this.getSkins();
  }
}
