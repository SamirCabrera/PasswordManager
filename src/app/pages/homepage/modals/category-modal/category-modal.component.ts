import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INewCategory } from 'src/app/interfaces/new-category';
import { CategoryService } from 'src/app/services/category.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

  public name: string;
  private nameCategory: INewCategory

  constructor(public dialogRef: MatDialogRef<CategoryModalComponent>, private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  public exit() {
    this.dialogRef.close();
  }

  public createCategory(): void {
    this.nameCategory = {
      name: this.name
    }

    this.categoryService.createCategory(this.nameCategory).subscribe( (res: any) => {
    });

    this.exit();
  }

}
