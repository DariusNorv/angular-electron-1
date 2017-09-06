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
  timeUpdate: {
    start: number,
    duration: number,
    current: number,
    step: number,
  };
  stream = '';

  constructor(private iconRegistry: MdIconRegistry,
              private sanitizer: DomSanitizer,
              private player: PlayerService,
              private renderer: Renderer2) {
    iconRegistry
      .addSvgIcon('play',
        sanitizer.bypassSecurityTrustResourceUrl(`assets/img/ic_play_arrow_white_24px.svg`))
      .addSvgIcon('pause',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_pause_white_24px.svg'));
    // Init slider
    this.timeUpdate = {
      start: 0,
      duration: 1,
      current: 0,
      step: 1,
    };
  }

  private initPlayer(): void {
    this.renderer.listen(this.audio.nativeElement, 'canplay', (evt) => {
      this.status = 'playing';
      this.timeUpdate.start = 0;
      this.timeUpdate.duration = Math.round(evt.target.duration);
      evt.target.play();
    });
  }

  private updateTimer(): void {
    this.renderer.listen(this.audio.nativeElement, 'timeupdate', (evt) => {
      this.timeUpdate.current = Math.round(evt.target.currentTime);
    })
  }

  play(): void {
    this.status = 'loading';
    this.player.update('https://hearthis.at/dariusnorv/district-podcast-vol-45/listen');
  }

  pause(): void {
    this.status = 'paused';
    this.audio.nativeElement.pause();
  }

  seek(evt: any): void {
    this.audio.nativeElement.currentTime = evt.value;
  }

  showThumbs(val: any): string {
    console.log(val);
    return `${val} s`;
  }

  ngOnInit() {
    this.status = 'paused';
    this.initPlayer();
    this.updateTimer();

    this.player.url.subscribe((url) => {
      this.stream = url;
      console.log('Updated ', url);
    }, ((err) => {
      console.log(err);
    }))
  }

}
