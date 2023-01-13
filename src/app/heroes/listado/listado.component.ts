import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["SpiderMan", "iroman", "hulk", "thor", "Capitan America"];
  heroeBorrado: string = "";

  borarHeroe(): void {
    // this.heroeBorrado=this.heroes.splice(0, 1)
    this.heroeBorrado = this.heroes.shift() || "";
  }

}
