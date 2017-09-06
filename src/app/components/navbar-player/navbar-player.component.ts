import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { PlayerService } from '../../providers/player.service';

@Component({
  selector: 'app-navbar-player',
  templateUrl: './navbar-player.component.html',
  styleUrls: ['./navbar-player.component.scss'],
})

export class NavbarPlayerComponent implements OnInit {
  @ViewChild('navbarAudioPlayer') audio: ElementRef;
  status: string;
  stream = '';

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private player: PlayerService,
              private renderer: Renderer2) {
    iconRegistry
      .addSvgIcon('play',
        sanitizer.bypassSecurityTrustResourceUrl(`assets/img/ic_play_arrow_white_24px.svg`))
      .addSvgIcon('pause',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_pause_white_24px.svg'))
  }

  private initPlayer(): void {
    this.renderer.listen(this.audio.nativeElement, 'canplay', (evt) => {
      this.status = 'playing';
      evt.target.play();
    });
  }

  play(): void {
    this.status = 'loading';
    this.player.update('http:\\/\\/hearthis.at\\/shawne\\/shawne-back-to-the-roots-2-05072014\\/listen\\/');
  }

  pause(): void {
    this.status = 'paused';
    this.audio.nativeElement.pause();
  }

  ngOnInit() {
    this.status = 'paused';
    this.initPlayer();

    this.player.url.subscribe((url) => {
      this.stream = url;
      console.log('Updated ', url);
    }, ((err) => {
      console.log(err);
    }))
  }

}
