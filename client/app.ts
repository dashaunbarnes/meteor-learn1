import {Component, View} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app'
})
@View({
  //  template: 'Hello World!'
  templateUrl: 'client/app.html'
})
class AppComponent { }

bootstrap(AppComponent);
