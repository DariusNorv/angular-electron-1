import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayerService {
  private urlBehavior = new BehaviorSubject('');
  url = this.urlBehavior.asObservable();

  constructor() { }

  update(url: string): void {
    this.urlBehavior.next(url);
  }

}
