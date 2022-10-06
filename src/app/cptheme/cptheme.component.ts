import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cptheme',
  templateUrl: './cptheme.component.html',
  styleUrls: ['./cptheme.component.css']
})
export class CpthemeComponent implements OnInit , AfterViewInit{

  @ViewChild('names') private names = {} as ElementRef;

  @ViewChild('city') private citys = {} as ElementRef;



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.names.nativeElement.style.background = 'red';
      this.names.nativeElement.style.color = 'white';

      this.citys.nativeElement.style.background = 'black'
      this.citys.nativeElement.style.color = 'white'
  }
}
