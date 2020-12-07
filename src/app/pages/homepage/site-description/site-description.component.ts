import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { INewSite } from 'src/app/interfaces/new-site';
import { SiteModel } from 'src/app/models/site.model';
import { CategoryService } from 'src/app/services/category.service';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-site-description',
  templateUrl: './site-description.component.html',
  styleUrls: ['./site-description.component.css']
})
export class SiteDescriptionComponent implements OnInit, OnChanges {
  @Input() idCategory: string;
  @Input() public site: SiteModel;

  public siteForm: FormGroup;
  public hide = true;
  public inputDisabled = true;
  public newSite: INewSite;

  constructor(private readonly siteSerive: SiteService, private readonly categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.site) {
      this.setInitForm();
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.siteForm = new FormGroup({
      name: new FormControl(null),
      password: new FormControl(null),
      user: new FormControl(null)
    })
  }

  public setInitForm() {
    this.siteForm.get('name').setValue(this.site.name);
    this.siteForm.get('password').setValue(this.site.password);
    this.siteForm.get('user').setValue(this.site.user);
  }

  public saveEdit(): void {

    this.newSite = {
      name: this.siteForm.get('name').value,
      password: this.siteForm.get('password').value,
      user: this.siteForm.get('user').value
    }

    this.siteSerive.editSite(this.idCategory, this.site.id, this.newSite).subscribe((res: any) => { 
      this.categoryService.emitCategory(true);
    });
  }
}
