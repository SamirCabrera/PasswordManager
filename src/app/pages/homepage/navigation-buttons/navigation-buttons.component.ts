import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryModalComponent } from '../modals/category-modal/category-modal.component';
import { ListSiteModalComponent } from '../modals/list-site-modal/list-site-modal.component';

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.css']
})
export class NavigationButtonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public createCategory() {
    const modal = this.dialog.open(CategoryModalComponent);

    modal.afterClosed().subscribe(result => {
      console.log('Modal abierto');
    })
  }

  public createListSite() {
    const modal = this.dialog.open(ListSiteModalComponent);

    modal.afterClosed().subscribe(result => {
      console.log('Modal abierto');
    })
  }

}
