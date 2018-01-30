import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { environment } from '../../environments/environment';

import * as DevData from '../../configs/dev.json';
import * as ProdData from '../../configs/dev.json';

@Injectable()
export class ConfigService implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot) {
    return new Promise((resolve, reject) => {
      resolve(environment.production ? ProdData : DevData);
    });
  }
}
