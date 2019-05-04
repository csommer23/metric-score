import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input()
  private _total: number = 0;
  private totalComponent: number = 0;
  private progress: number = 0;

  @Input()
  set total(total: number) {
    this._total = total;
    this.refreshProgress();
  }

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.totalComponent++;
  }

  private refreshProgress() {
     this.progress = (this.totalComponent * 100) / this._total;
  }
}
