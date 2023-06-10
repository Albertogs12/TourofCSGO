import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Skin } from '../Skin';
import { ActivatedRoute } from '@angular/router';
import { CsgoskinsComponent } from '../csgoskins/csgoskins.component';
import { CSGOService } from '../counter.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  skinactual: Skin;
  // @Output() lastSkin:EventEmitter<Skin>=new EventEmitter<Skin>();

  constructor(private route: ActivatedRoute, private csgoSearchService: CSGOService, private location: Location) {
    // this.skinactual = {
    //   id: "skin-65604",
    //   name: "Desert Eagle | DDPAT urbano",
    //   description: "Tan cara como potente, la Desert Eagle es una emblemática pistola difícil de dominar pero sorprendentemente precisa a larga distancia.",
    //   weapon: "Desert Eagle",
    //   pattern: "DDPAT urbano",
    //   min_float: 0.06,
    //   max_float: 0.8,
    //   rarity: "de grado de consumidor",
    //   image: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_large.06af0cb0e08490f1fba17acd1b9c98978745c213.png"
    // };
  }
  ngOnInit(): void {
    const nombreSkin = this.route.snapshot.paramMap.get('name');
    this.skinactual = this.csgoSearchService.searchSkins(nombreSkin)[0];
    // if (this.skinactual) {
    //   console.log(this.skinactual);
    //   // this.lastSkin.emit(this.skinactual);
    // }
  }
  goBack(): void {
    this.location.back();
  }
}
