import { BaseModel } from './base.model';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Site')
export class SiteModel extends BaseModel {
    @JsonProperty('id', String)
    public id: string = undefined

    @JsonProperty('name', String)
    public name: string = undefined

    @JsonProperty('password', String)
    public password: string = undefined

    @JsonProperty('user', String)
    public user: string = undefined

    @JsonProperty('url', String)
    public url: string = undefined
}