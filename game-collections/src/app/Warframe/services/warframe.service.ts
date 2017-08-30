import {Injectable} from "@angular/core";
import {Warframe} from "../warframe";
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WarframeService{
  private warframesUrl = 'api/warframes'; // URL to web api
  private headers = new Headers({'Content-type': 'application/json'});

  constructor(private http: Http) {}

  getWarframes(): Promise<Warframe[]> {
    return this.http.get(this.warframesUrl)
      .toPromise()
      .then(response =>response.json().data as Warframe[])
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

  getWarframe(id: number): Promise<Warframe> {
    const url = `${this.warframesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Warframe)
      .catch(this.handleError);
  }

  update(warframe: Warframe): Promise<Warframe> {
    const url = `${this.warframesUrl}/${warframe.id}`;
    return this.http
      .put(url, JSON.stringify(warframe), {headers: this.headers})
      .toPromise()
      .then(() => warframe)
      .catch(this.handleError);
  }

  create(name: string): Promise<Warframe> {
    return this.http
      .post(this.warframesUrl, JSON.stringify({name: name}),{headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Warframe)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.warframesUrl}/${id}}`
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
