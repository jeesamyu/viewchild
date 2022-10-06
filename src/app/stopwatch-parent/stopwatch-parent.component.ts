import { Component, OnInit, ViewChild } from '@angular/core';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-stopwatch-parent',
  templateUrl: './stopwatch-parent.component.html',
  styleUrls: ['./stopwatch-parent.component.css']
})
export class StopwatchParentComponent implements OnInit {

  @ViewChild(StopwatchComponent) 

  private stopwatch = {} as StopwatchComponent;

  startstopwatch(){
    this.stopwatch.start();
  }

  stopstopwatch(){
    this.stopwatch.stop();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
