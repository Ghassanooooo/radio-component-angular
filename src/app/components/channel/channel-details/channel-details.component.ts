import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-channel-details",
  templateUrl: "./channel-details.component.html",
  styleUrls: ["./channel-details.component.scss"]
})
export class ChannelDetailsComponent implements OnInit {
  @Input() radio: any;

  constructor() {}

  ngOnInit() {}
}
