import { Component, OnInit, Input } from '@angular/core';
import { Franqer } from '../shared/franqer.model';

@Component({
  selector: 'app-franqer-detail',
  templateUrl: './franqer-detail.component.html',
  styleUrls: ['./franqer-detail.component.scss']
})
export class FranqerDetailComponent implements OnInit {

  @Input()
  franqer: Franqer;
  shareLink;

  constructor( ) {
  }

  getPhoneTransformed(phone) {
    if (!phone) {
      return;
    }

    return phone.replace(/[- )(]/g, '').replace(/^0+/, '');
  }

  getWhatsappLink(phone) {
    if (!phone) {
      return;
    }

    const phoneTransformed = this.getPhoneTransformed(phone);
    return `https://wa.me/${phoneTransformed}`;
  }

  getFirstName(fullName) {
    return fullName && fullName.split(' ')[0];
  }

  // TODO: trataiva
  getResume(franqer) {
    console.log('franqer: ', this.franqer);
  }

  ngOnInit() {
    this.shareLink = window.location;
  }

}
