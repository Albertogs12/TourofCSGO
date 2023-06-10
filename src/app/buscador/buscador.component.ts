import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CSGOService } from '../counter.service';
import { Skin } from '../Skin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

 filteredSkins :Skin[];
  constructor(private csgoSearchService: CSGOService,private router: Router) {}

  public buscar ():void{
    const input = <HTMLInputElement>document.getElementById("inputbuscador");
  

    
    this.filteredSkins = this.csgoSearchService.searchSkins(input.value);
  input.value='';

  }
  goToDetail(skin:Skin):void{
    this.router.navigate(['/detalle/'+skin.name]);
    this.filteredSkins=null
  }

}


