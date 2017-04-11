import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  inputs: [ 'name', 'status' ],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
