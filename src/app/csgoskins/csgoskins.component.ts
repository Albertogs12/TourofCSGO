import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skin } from '../Skin';
import { CSGOService } from '../counter.service';

@Component({
  selector: 'app-csgoskins',
  templateUrl: './csgoskins.component.html',
  styleUrls: ['./csgoskins.component.css'],
})
export class CsgoskinsComponent implements OnInit {
  p:number = 1;
  constructor(private csgoService: CSGOService) {}

  allSkins: Skin[];


  getSkinsRandom() {
    this.csgoService
      .getSkinsRandom()
      .subscribe((skins) => {
        this.allSkins = skins.sort(() => (Math.random() > 0.5 ? 1 : -1));
        this.csgoService.setSkins(this.allSkins);
      });
      
  }

  ngOnInit(): void {
    this.getSkinsRandom();
    this.csgoService.setSkins(this.allSkins);
  }


}
