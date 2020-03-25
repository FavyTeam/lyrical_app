import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit{
  title = 'Vitican Partners';
  constructor(private spinner: NgxSpinnerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }
  ngOnInit(): void {
    this.spinner.show();
    AOS.init({
      easing: 'ball-atom',
      duration: 1000,
      startEvent: 'DOMContentLoaded',
      offset: 0
    });
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.router)
      .subscribe((event) => {
          const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
          this.titleService.setTitle(title);
        }
      );
  }
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
