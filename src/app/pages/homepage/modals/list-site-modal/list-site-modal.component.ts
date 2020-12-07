import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewSite } from 'src/app/interfaces/new-site';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-list-site-modal',
  templateUrl: './list-site-modal.component.html',
  styleUrls: ['./list-site-modal.component.css']
})
export class ListSiteModalComponent implements OnInit {

  public hide = true;
  public site: INewSite;
  public name: string;
  public password: string;
  public user: string;

  constructor(public dialogRef: MatDialogRef<ListSiteModalComponent>, @Inject(MAT_DIALOG_DATA) public data: string,
              private readonly siteService: SiteService) { }

  ngOnInit(): void {
  }

  public exit() {
    this.dialogRef.close();
  }

  public createSite(): void {

    this.site = {
      name: this.name,
      password: this.password,
      user: this.user
    }

    this.siteService.createSite(this.data, this.site).subscribe( (res: any) => {

    }, error => {
      console.log("Hubo un error");
    });

    this.exit();
  }

}
