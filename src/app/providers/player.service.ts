import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayerService {
  private urlBehavior = new BehaviorSubject('');
  url = this.urlBehavior.asObservable();

  constructor() {
  }

  update(key: string): void {
    this.urlBehavior.next(`https://api.mixcloud.com${key}embed-html`);
  }

  private getMixcloudPlayer(id: string) {
    return document.getElementById(`${id}`)
      ['contentWindow']
      .document
      .querySelector('iframe')
      .contentWindow
      .document;
  }

  getMixcloudPlayerButton(id: string, type: string) {
    return this.getMixcloudPlayer(id).querySelector(`.widget-${type}-button`);
  }

}
