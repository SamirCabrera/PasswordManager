import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnpointsEnum } from '../core/repository/enums/endpoints.enum';
import { RemoteRepository } from '../core/repository/remote.repository';
import { INewSite } from '../interfaces/new-site';
import { map } from 'rxjs/operators';
import { SiteModel } from '../models/site.model';

@Injectable({
  providedIn: 'root'
})
export class SiteService {


  constructor(private readonly remoteRepository: RemoteRepository) { }

  public createSite(idCategory: string, requestSite: INewSite): Observable<void> {
    return this.remoteRepository.set(EnpointsEnum.CATEGORY + '/' + idCategory, requestSite).pipe(map((res: any) => { }))
  }

  public deleteSite(idCategory: string, idSite: string): Observable<void> {
    return this.remoteRepository.delete(EnpointsEnum.CATEGORY + '/' + idCategory + '/' + idSite).pipe(map((res:any) => { }))
  }

  public editSite(idCategory: string, idSite: string, requestSite: INewSite): Observable<void> {
    return this.remoteRepository.update(EnpointsEnum.CATEGORY + '/' + idCategory + '/' + idSite, requestSite).pipe(map((res:any) => { }))
  }
}
