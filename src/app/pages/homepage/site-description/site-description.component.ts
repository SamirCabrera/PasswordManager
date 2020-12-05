import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.component.html',
  styleUrls: ['./site-description.component.css']
})
export class SiteDescriptionComponent implements OnInit {

  public hide = true;
  public inputDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
