import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { SiteModel } from 'src/app/models/site.model';
import { CategoryService } from 'src/app/services/category.service';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() idCategory = new EventEmitter<string>();
  @Output() sites = new EventEmitter<Array<SiteModel>>();

  public subscribe: any;

  public allCategorys: Array<CategoryModel>;

  public status: boolean;

  constructor(private readonly categoryService: CategoryService, private readonly siteService: SiteService) { }

  ngOnInit(): void {
    this.getCategorys();
    this.subscribe = this.categoryService.getEmitCategory().subscribe(res => {
      this.allCategorys = Array<CategoryModel>();

      this.getCategorys();
    })
  }

  public sendIdCategory(idCategory: string) {
    this.idCategory.emit(idCategory);
  }

  public deleteCategory(idCategory: string): void {
    if (idCategory != null) {
      this.categoryService.deleteCategory(idCategory).subscribe((res: any) => { })
      this.categoryService.emitCategory(true);
    }
  }

  public sendSites(sites: Array<SiteModel>): void {
    this.sites.emit(sites);
  } 

  private getCategorys(): void {
    this.categoryService.getCategorys().subscribe( (category: Array<CategoryModel>) => {
      this.allCategorys = category;

    })
    
    
  }

}
