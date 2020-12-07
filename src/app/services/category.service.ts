import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteRepository } from '../core/repository/remote.repository';
import { CategoryModel } from '../models/category.model';
import { EnpointsEnum } from '../core/repository/enums/endpoints.enum';
import { map } from 'rxjs/operators';
import { INewCategory } from '../interfaces/new-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public category: EventEmitter<boolean> = new EventEmitter();

  constructor(private readonly remoteRepository: RemoteRepository) { }

  public emitCategory(status: boolean) {
    this.category.emit(status);
  }

  public getEmitCategory() {
    return this.category;
  }

  public getCategorys(): Observable<Array<CategoryModel>> {
    return this.remoteRepository.get(EnpointsEnum.CATEGORY).pipe(map((res: any) => {

      try {
          console.log(res); 
          return CategoryModel.deserializeArray(res, CategoryModel);

      } catch (error) {
          console.log(error);
      }

    }));
  }

  public createCategory(nameCategory: INewCategory): Observable<void> {
    return this.remoteRepository.set(EnpointsEnum.CATEGORY, nameCategory).pipe(map((res: any) => {
      console.log(res);
    }));
  }

  public deleteCategory(idCategory: string): Observable<void> {
    return this.remoteRepository.delete(EnpointsEnum.CATEGORY + '/' + idCategory).pipe(map((res: any) => {
      
    }))
  }
}
