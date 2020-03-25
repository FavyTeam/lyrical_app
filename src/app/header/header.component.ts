import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public headertype: string = '';
  constructor(private router: Router) {
   this.headertype = ((this.router.url === '/') ? 'light' : 'dark');
  }
  handleMenuOpenClick() {
    $('.menu').stop(0).fadeIn('fast');
  }
  ngOnInit(): void {
  }

}
