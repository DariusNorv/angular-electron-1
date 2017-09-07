import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { PlayerService } from '../../providers/player.service';

@Component({
  selector: 'app-content-player',
  templateUrl: './content-player.component.html',
  styleUrls: ['./content-player.component.scss'],
})
export class ContentPlayerComponent implements OnInit {
  @Input() title: string;
  @Input() user: string;
  @Input() img: string;
  @Input() key: string;
  @Input() id: number;

  noImage = 'http://iglous.ru/images/default.jpg';
  private url: string;

  constructor(iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer, private pl: PlayerService) {
    iconRegistry
      .addSvgIcon('play',
        sanitizer.bypassSecurityTrustResourceUrl(`assets/img/play.svg`));
  }

  ngOnInit() {
    this.pl.url.subscribe((url) => {
      this.url = url;
    })
  }

  play(key: string): void {
    this.pl.update(key);
  }
}
