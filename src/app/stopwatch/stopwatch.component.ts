import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {

  shouldRun:boolean = false;
  counter:number = 0;

  start(){
    this.shouldRun = true;

    let intervel = setInterval( () => {

        if(this.shouldRun === false){
          clearInterval(intervel)
        }
          this.counter = this.counter + 1;
    },1000)
  }

  stop(){
    this.shouldRun = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
