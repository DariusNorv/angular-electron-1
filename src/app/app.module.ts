import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdGridListModule,
  MdCardModule,
  MdMenuModule,
  MdIconModule,
  MdButtonModule,
  MdToolbarModule,
  MdListModule,
} from '@angular/material';

// My modules
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SoundcloudComponent } from './components/soundcloud/soundcloud.component';
import { MixcloudComponent } from './components/mixcloud/mixcloud.component';
import { ContentPlayerComponent } from './components/content-player/content-player.component';
import { NavbarPlayerComponent } from './components/navbar-player/navbar-player.component';
import { PlayerService } from './providers/player.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SettingsComponent,
    SoundcloudComponent,
    MixcloudComponent,
    ContentPlayerComponent,
    NavbarPlayerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
  ],
  providers: [ElectronService, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
