import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';
import { SiteModel } from './site.model';

@JsonObject('Category')
export class CategoryModel extends BaseModel {
    @JsonProperty('id', String)
    public id: string = undefined

    @JsonProperty('name', String)
    public name: string = undefined

    @JsonProperty('sites', [SiteModel], true)
    public sites?: Array<SiteModel> = undefined;
}