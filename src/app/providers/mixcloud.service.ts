import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PROVIDERS } from '../shared/providers';
import { Http } from '@angular/http';

@Injectable()
export class MixcloudService {
  private api: string = PROVIDERS[0].api;
  json: any;

  constructor(private http: Http) {
  }

  getNew(): Promise<any> {
    return this.http
      .get(`${this.api}new`)
      .toPromise()
      .then(res => res.json().data)
  }

}
