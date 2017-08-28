import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { sanitizeUrl } from '@angular/platform-browser/src/security/url_sanitizer';

@Component({
  selector: 'app-content-player',
  templateUrl: './content-player.component.html',
  styleUrls: ['./content-player.component.scss'],
})
export class ContentPlayerComponent {
  @Input() title: string;
  @Input() user: string;
  @Input() img: string;
  @Input() key: string;
  @Input() id: number;

  noImage = 'http://iglous.ru/images/default.jpg';

  constructor(iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('play',
        sanitizer.bypassSecurityTrustResourceUrl(`assets/img/play.svg`));
  }

  iframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://api.mixcloud.com/${this.key}/embed-html`);
  }

  iframeId(): string {
    return `mixCloudPlayer_${this.id}`;
  }

  private getMixcloudPlayer(id: number) {
    return document.getElementById(`mixCloudPlayer_${id}`)
      ['contentWindow']
      .document
      .querySelector('iframe')
      .contentWindow
      .document;
  }

  private getMixcloudPlayerButton(id: number, type: string) {
    return this.getMixcloudPlayer(id).querySelector(`.widget-${type}-button`);
  }

  play(id: number): void {
    // console.log(id);
   this.getMixcloudPlayerButton(id, 'play').click();
  }
}
