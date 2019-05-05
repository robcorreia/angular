import { Component, OnInit, Input } from '@angular/core';
import { Franqer } from '../../../franqers/shared/franqer.model'

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss']
})
export class ReviewsCarouselComponent implements OnInit {

  @Input()
  title;
  @Input()
  reviews;
  slideConfig;

  constructor() {
    this.slideConfig = {
      "slidesToShow": 3, "slidesToScroll": 1,
      "dots": true, "infinite": true, "centerMode": false
    };
  }

  ngOnInit() {
  }

}
