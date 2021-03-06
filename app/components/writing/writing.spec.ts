/* tslint:disable:no-unused-variable typedef */
import { Component } from 'angular2/core';
import {
  afterEach,
  beforeEach,
  describe,
  fdescribe,
  xdescribe,
  expect,
  it,
  fit,
  xit,
  beforeEachProviders,
  inject,
  TestComponentBuilder
} from 'angular2/testing';

import { WritingComponent } from './writing.component';


@Component({
  template: '',
  directives: [WritingComponent]
})
class TestComponent {}


describe('Home', () => {
  it('should display a greeting', inject([TestComponentBuilder], tcb => {
    tcb.createAsync(WritingComponent)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.nativeElement;

        expect(compiled.querySelector('h3')).toHaveText('Hello world!');
      });
  }));

  it('should display a greeting (overrideTemplate)', inject([TestComponentBuilder], tcb => {
    tcb.overrideTemplate(TestComponent, '<home></home>')
      .createAsync(WritingComponent)
      .then(fixture => {
        fixture.detectChanges();
        let compiled = fixture.nativeElement;

        expect(compiled.querySelector('h3')).toHaveText('Hello world!');
      });
  }));
});
