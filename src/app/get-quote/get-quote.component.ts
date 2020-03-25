import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {NgxSpinnerService} from 'ngx-spinner';
import * as Email from '../../assets/js/smtp';


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.less']
})
export class GetQuoteComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  handleMenuOpenClick() {
    $('.menu').stop(0).fadeIn('fast');
  }
  handleMenuCloseClick() {
    $('.menu').stop(0).fadeOut('fast');
  }
  handleSelectAttachmentClick() {
    $('.select-attachment').trigger('click');
  }
  sendEmail() {
    console.log(Email);
    Email.send({
      Host : 'smtp.mailtrap.io',
      Username : 'faf0bceaef7351',
      Password : '609a1da089e057',
      To : 'maikap.samir14@gmail.com',
      From : 'maikap.samir@gmail.com',
      Subject : 'this.model.subject',
      Body : 'wfewfwefwewef',
    }).then( message => { alert(message); });
  }

  ngOnInit(): void {
    const $this = this;
    window.onload = function() {
      setTimeout(() => {
        $this.spinner.hide();
      }, 1000);
    };
  }

}
