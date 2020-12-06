import { JsonConverter, JsonCustomConvert } from 'json2typescript';
import { SiteModel } from '../site.model'

@JsonConverter
export class SiteConverter implements JsonCustomConvert<Array<SiteModel>> {

    public serialize(sites: Array<SiteModel>): Array<SiteModel> {

        return sites;
    }

    public deserialize(site: any): Array<SiteModel> {

        return Object.values(site);
    }
}