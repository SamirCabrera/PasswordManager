import { Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { SiteModel } from 'src/app/models/site.model';
import { CategoryService } from 'src/app/services/category.service';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent implements OnInit {
  @Input() public sites: Array<SiteModel>;
  @Input() idCategory: string;
  @Output() site = new EventEmitter<SiteModel>();
  @ViewChild(MatAccordion) accordion: MatAccordion;
  

  constructor(private readonly siteService: SiteService, private readonly categoryService: CategoryService) { }


  ngOnInit(): void {
  }

  public deleteSite(idSite: string): void {
    this.siteService.deleteSite(this.idCategory, idSite).subscribe( (res: any) => { })
    this.categoryService.emitCategory(true);
  }

  public sendSite(site: SiteModel): void {
    this.site.emit(site);
  }

}
