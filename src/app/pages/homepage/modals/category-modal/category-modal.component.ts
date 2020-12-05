import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CategoryModalComponent>) { }

  ngOnInit(): void {
  }

  public exit() {
    this.dialogRef.close();
  }

}
