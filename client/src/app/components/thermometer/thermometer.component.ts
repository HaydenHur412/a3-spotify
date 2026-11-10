import { Component, OnInit, Input } from '@angular/core';
import { Popularity } from '../../data/popularity';

@Component({
    selector: 'app-thermometer',
    templateUrl: './thermometer.component.html',
    styleUrls: ['./thermometer.component.css'],
    standalone: false
})
export class ThermometerComponent implements OnInit {
  //TODO: define Input fields and bind them to the template.
  @Input() popularity:Popularity;

  constructor() { }

  ngOnInit() {
  }

}
