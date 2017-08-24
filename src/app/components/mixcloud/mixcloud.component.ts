import { Component, OnInit } from '@angular/core';
import { MixcloudService } from '../../providers/mixcloud.service';

@Component({
  selector: 'app-mixcloud',
  templateUrl: './mixcloud.component.html',
  styleUrls: ['./mixcloud.component.scss'],
  providers: [MixcloudService],
})
export class MixcloudComponent implements OnInit {
  data: any;

  constructor(private MixCloudService: MixcloudService) {
  }

  ngOnInit() {
    this.MixCloudService
      .getNew()
      .then(res => this.data = res);
  }

}
