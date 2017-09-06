import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.scss']
})
export class SoundcloudComponent implements OnInit {
  sidebar = [
    {
      name: 'latest',
      url: 'https://api.soundcloud.com/tracks/?client_id=bd6e76466be344a1d89fd254acf50498&releaseMonth=9&releaseYear=2017'
    },
    {
      name: 'new',
      url: 'https://api.soundcloud.com/tracks/?client_id=bd6e76466be344a1d89fd254acf50498&releaseMonth=9&releaseYear=2017',
    },
    {
      name: 'hot',
      url: 'https://api.soundcloud.com/tracks/?client_id=bd6e76466be344a1d89fd254acf50498&releaseMonth=9&releaseYear=2017',
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
