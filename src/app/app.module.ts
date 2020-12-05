import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoryComponent } from './pages/homepage/category/category.component';
import { NavigationButtonsComponent } from './pages/homepage/navigation-buttons/navigation-buttons.component';
import { CategoryModalComponent } from './pages/homepage/modals/category-modal/category-modal.component';
import { ListSiteModalComponent } from './pages/homepage/modals/list-site-modal/list-site-modal.component';
import { ListSiteComponent } from './pages/homepage/list-site/list-site.component';
import { SiteDescriptionComponent } from './pages/homepage/site-description/site-description.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategoryComponent,
    NavigationButtonsComponent,
    CategoryModalComponent,
    ListSiteModalComponent,
    ListSiteComponent,
    SiteDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
