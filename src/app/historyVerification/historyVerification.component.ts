import { Component, OnInit } from '@angular/core';
import { StaticDataSource } from '../history/static.datasource';
import { History } from '../history/history.model';

@Component({
  selector: 'app-historyverification',
  templateUrl: './historyVerification.component.html',
  styleUrls: ['./historyVerification.component.scss'],
  providers: [StaticDataSource]
})
export class HistoryVerificationComponent implements OnInit {
  private history: History[] = [];
  constructor(private staticdata: StaticDataSource) { }

  ngOnInit() {
    console.log(this.staticdata.getHistory());
  }

  get Records(): History[] {
    return this.staticdata.getHistory();
  }
}
