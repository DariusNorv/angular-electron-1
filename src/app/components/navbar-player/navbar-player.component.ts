import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from '../../providers/player.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar-player',
  templateUrl: './navbar-player.component.html',
  styleUrls: ['./navbar-player.component.scss'],
})
export class NavbarPlayerComponent implements OnInit {
  private url;
  private isplaying: boolean;
  private previous: string;

  constructor(private pl: PlayerService, private sanitizer: DomSanitizer) {
  }

  protected startPlayer(): void {
    // if (this.url.changingThisBreaksApplicationSecurity.length > 0) {
    // Stop before play
    // if (this.pl.getMixcloudPlayerButton('mixCloudIframe', 'pause')) {
    //   this.pl.getMixcloudPlayerButton('mixCloudIframe', 'pause').click();
    // };
    // this.pl.getMixcloudPlayerButton('mixCloudIframe', 'play').click();
    // this.mixCloudPlaying = !this.mixCloudPlaying;
    if (!this.isplaying) {
      this.pl.getMixcloudPlayerButton('mixCloudIframe', 'play').click();
      this.isplaying = true;
    }
    console.log('loaded');
    // }
  }

  ngOnInit() {
    this.isplaying = false;
    this.pl.url.subscribe((url) => {
      // debugger;
      // Do we need to update url
      if (this.previous !== url) {
        // Stop playing before update
        if (this.isplaying && url !== '') {
          this.pl.getMixcloudPlayerButton('mixCloudIframe', 'pause').click();
          this.isplaying = false;
        }
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      } else {
        if (this.isplaying) {
          this.pl.getMixcloudPlayerButton('mixCloudIframe', 'pause').click();
          this.isplaying = false;
        } else {
          this.pl.getMixcloudPlayerButton('mixCloudIframe', 'play').click();
          this.isplaying = true;
        }
      }
      this.previous = url;
    })
  }
}
