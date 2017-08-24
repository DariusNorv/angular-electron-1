import { Component, OnInit } from '@angular/core';
import { MixcloudService } from '../../providers/mixcloud.service';
import { current } from 'codelyzer/util/syntaxKind';

@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.scss'],
  providers: [MixcloudService],
})
export class MixcloudComponent implements OnInit {
  data: any;
  sidebar = [
    {
      name: 'popular',
      url: 'popular/'
    },
    {
      name: 'new',
      url: 'new/',
    },
    {
      name: 'hot',
      url: 'popular/hot/',
    }];
  current = 0;

  constructor(private MixCloudService: MixcloudService) {
  }

  ngOnInit() {
    this.updateContent(this.current);
  }

  updateContent(index: number) {
    return this.MixCloudService
      .getNew(this.sidebar[index].url)
      .then(res => this.data = res);
  }

  changeStream(index: number) {
    this.current = index;
    this.updateContent(index);
  }

}
