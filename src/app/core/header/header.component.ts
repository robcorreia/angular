import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pathName;
  isFranqPage: boolean;
  franquerName;
  objs = [];
  isTop = true;

  constructor(
    private location: Location
    ) { }

  ngOnInit() {
    this.pathName = this.location.path();
    this.isFranqPage = this.pathName === '' ?  false : true;
    this.franquerName = localStorage.getItem('frankerName');

    var divs = document.getElementsByTagName('div');
    for(var i=0; i<divs.length; i++) {
      if (divs[i].classList.contains('show')) {
        divs[i].style.visibility = 'hidden';
        this.objs.push(divs[i]);
      }
    }

    window.scroll({
      top: 2500, 
      left: 0, 
      behavior: 'smooth'
    });
    window.addEventListener('scroll', () => this.scroll(window), true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.scroll(window), true);
  }

  scroll = (window): void => {
    let scroll = window.scrollY();
    let windows_height = window.winHeight();

    for(var i=0; i < this.objs.length; i++) {
        if ((scroll+(windows_height/1.2)) > window.getPos(this.objs[i])) {
          this.objs[i].style.visibility = 'visible';
          this.objs[i].className += ' animated fade-in-up';
          this.objs.splice(i,1);
        }
    }

    this.isTop = scroll > 200 ? false : true;
  };

}
