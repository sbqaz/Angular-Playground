import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import {Warframe} from "../warframe";

@Injectable()
export class WarframeSearchService {
  constructor(private http: Http) {}

  search(term: string): Observable<Warframe[]> {
    return this.http
      .get(`api/warframes/?name=${term}`)
      .map(response => response.json().data as Warframe[]);
  }
}
