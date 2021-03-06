/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
template: '<h1>{{welcomeMessage}}</h1>'
})

// Component controller
class MyAppComponent {
  name: string;

  constructor() {
    this.welcomeMessage = 'This app is spectangular!';
  }
}

bootstrap(MyAppComponent);
