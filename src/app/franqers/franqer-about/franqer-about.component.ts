import { Component, OnInit, Input } from '@angular/core';
import { Franqer } from '../shared/franqer.model';


@Component({
  selector: 'app-franqer-about',
  templateUrl: './franqer-about.component.html',
  styleUrls: ['./franqer-about.component.scss']
})
export class FranqerAboutComponent implements OnInit {

  @Input()
  franqer: Franqer;

  constructor() { }

  ngOnInit() {
  }

}
