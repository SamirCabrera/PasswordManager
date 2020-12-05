import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-site-modal',
  templateUrl: './list-site-modal.component.html',
  styleUrls: ['./list-site-modal.component.css']
})
export class ListSiteModalComponent implements OnInit {

  public hide = true;

  constructor(public dialogRef: MatDialogRef<ListSiteModalComponent>) { }

  ngOnInit(): void {
  }

  public exit() {
    this.dialogRef.close();
  }

}
