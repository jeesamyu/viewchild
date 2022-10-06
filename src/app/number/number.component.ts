import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  message:string='';
  count:number=0;

  increasedByone(){
    this.count = this.count+1;
    this.message = 'Counter'+ ' ' + this.count;
  }

  decreaseByone(){
    this.count = this.count - 1;
    this.message = 'Counter' + ' ' + this.count;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
