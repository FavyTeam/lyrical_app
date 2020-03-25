import { Component, OnInit } from "@angular/core";
import $ from "jquery";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-lyrical",
  templateUrl: "./lyrical.component.html",
  styleUrls: ["./lyrical.component.less"]
})
export class LyricalComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}
  handleMenuOpenClick() {
    $(".menu")
      .stop(0)
      .fadeIn("fast");
  }
  handleMenuCloseClick() {
    $(".menu")
      .stop(0)
      .fadeOut("fast");
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
