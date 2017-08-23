import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { PROVIDERS } from '../../shared/providers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  providers = PROVIDERS;
  show: boolean = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('settings',
        sanitizer.bypassSecurityTrustResourceUrl(`assets/img/ic_more_vert_black_24px.svg`))
      .addSvgIcon('logo',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-cloud.svg'))
  }

  ngOnInit() {
  }

}
