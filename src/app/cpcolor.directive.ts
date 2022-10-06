import { style } from '@angular/animations';
import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCpcolor]'
})
export class CpcolorDirective implements AfterViewInit {

  constructor(private eleref : ElementRef) { 

  }

  ngAfterViewInit(): void {
      this.eleref.nativeElement.style.color = 'red'
  } 

  change(changedcolor : string){
    this.eleref.nativeElement.style.color = changedcolor;
  }
}
