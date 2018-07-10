import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  constructor() { }
  @Input() Id: string;
  on: string = null;
  off: string = null;
  neutral: string = null;
  value: string = null;
  ngOnInit() {
    this.on = 'on' + this.Id;
    this.off = 'off' + this.Id;
    this.neutral = 'neutral' + this.Id;
    this.value = 'value' + this.Id;
  }
}
