import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { CpcolorDirective } from '../cpcolor.directive';

@Component({
  selector: 'app-cpcolor-parant',
  templateUrl: './cpcolor-parant.component.html',
  styleUrls: ['./cpcolor-parant.component.css']
})
export class CpcolorParantComponent implements OnInit {

  @ViewChild(CpcolorDirective) private cpcolor = {} as CpcolorDirective;

  changeColor(color:string){
    this.cpcolor.change(color)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
