import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryModalComponent } from '../modals/category-modal/category-modal.component';
import { ListSiteModalComponent } from '../modals/list-site-modal/list-site-modal.component';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {
  @Input() idCategory: string;


  constructor(private dialog: MatDialog, private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  public createCategory() {
    const modal = this.dialog.open(CategoryModalComponent);

    modal.afterClosed().subscribe(result => {
      this.categoryService.emitCategory(true);
    })
  }

  public createListSite() {
    const modal = this.dialog.open(ListSiteModalComponent, { data: this.idCategory});

    modal.afterClosed().subscribe(result => { 
      this.categoryService.getCategorys().subscribe((res: any) => { 
        this.categoryService.emitCategory(true);
      })
    })
  }

}
