import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoteRepository } from '../core/repository/remote.repository';
import { CategoryModel } from '../models/category.model';
import { EnpointsEnum } from '../core/repository/enums/endpoints.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private readonly remoteRepository: RemoteRepository) { }

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
}
