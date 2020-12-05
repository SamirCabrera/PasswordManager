import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { CategoryComponent } from './category/category.component';
import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { CategoryModalComponent } from './modals/category-modal/category-modal.component';
import { ListSiteModalComponent } from './modals/list-site-modal/list-site-modal.component';
import { ListSiteComponent } from './list-site/list-site.component';
import { SiteDescriptionComponent } from './site-description/site-description.component';


@NgModule({
  declarations: [HomepageComponent, CategoryComponent, NavigationButtonsComponent, CategoryModalComponent, ListSiteModalComponent, ListSiteComponent, SiteDescriptionComponent],
  imports: [
    CommonModule, AngularMaterialModule
  ]
})
export class HomepageModule { }
