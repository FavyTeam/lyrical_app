import {Component, HostListener, OnInit, AfterViewInit} from '@angular/core';
import $ from 'jquery';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bannerVideo: string;
  constructor(private spinner: NgxSpinnerService) {
    this.bannerVideo = '../../assets/videos/banner.mp4';
  }
  handleMenuOpenClick() {
    $('.menu').stop(0).fadeIn('fast');
  }
  handleMenuCloseClick() {
    $('.menu').stop(0).fadeOut('fast');
  }
  handleVideoLoaded() {
    const $this = this;
    setTimeout(function() {
      $this.spinner.hide();
    }, 1000);
  }
  displayServiceContent($event) {
    const $this = $($event.target);
    $this.parents().find('.text').addClass('text-muted');
    $this.removeClass('text-muted');
    $this.parents().find('.line:not(.vertical)').addClass('d-none');
    $this.parent().find('.line:not(.vertical )').removeClass('d-none');
    $('.service-content').addClass('d-none');
    $('.' + $this.attr('data-type')).removeClass('d-none').addClass('fade-up');
  }
  startPlayingVideo() {
    const video = document.querySelector('video');
    video.muted = true;
    video.play();
    console.log('video play');
  }
  ngOnInit(): void {
  }
  handleVideoEnded($this){
    // console.log($this.currentTime);
  }
}
