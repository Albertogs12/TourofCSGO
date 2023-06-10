import { ChangeDetectorRef, Component } from '@angular/core';
import { Skin } from '../Skin';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  skins: Skin[] = [];
  // Output LastSkin
constructor(){}
  actualizarSkins(nuevasSkins: Skin[]) {
    this.skins = nuevasSkins;
  }
}
