import { Component, OnInit } from '@angular/core';
import { PROVIDERS } from '../../shared/providers';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  providers = PROVIDERS;

  constructor() {
  }

  ngOnInit() {
  }

}
