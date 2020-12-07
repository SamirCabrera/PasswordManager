import { Component, OnInit } from '@angular/core';
import { SiteModel } from 'src/app/models/site.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public idCategory: string;
  public sites: Array<SiteModel>
  public site: SiteModel;

  constructor() { }

  ngOnInit(): void {
  }

  public sendIdCategory(idCategory: string): void {
    this.idCategory = idCategory;
  }

  public sendSites(sites: Array<SiteModel>): void {
    this.sites = sites;
  }

  public sendSite(site: SiteModel): void {
    this.site = site;
  }

}
