import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  public allCategorys: Array<CategoryModel>;

  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  private getCategorys(): void {
    this.categoryService.getCategorys().subscribe( (category: Array<CategoryModel>) => {
      console.log(category);
      this.allCategorys = category;
    })
  }

}
