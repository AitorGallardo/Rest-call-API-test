import { TestService } from './test.service';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';


  constructor(private _service: TestService) {

  }
  request() {
    const request = this._service.dorequest();
    console.log('resquesting', request);

  }

}

