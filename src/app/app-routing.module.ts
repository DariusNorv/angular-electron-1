import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SoundcloudComponent } from './components/soundcloud/soundcloud.component';
import { MixcloudComponent } from './components/mixcloud/mixcloud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'soundcloud',
    component: SoundcloudComponent,
  },
  {
    path: 'mixcloud',
    component: MixcloudComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
