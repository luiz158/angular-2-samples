import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/src/aot/upgrade_module';
import {downgradeComponent} from '@angular/upgrade/src/aot/downgrade_component';

import {TextEditor} from './components/text-editor/text-editor';
import {Algorithms} from './components/algorithms/algorithms';
import {SurveyDemo} from './components/survey/survey-demo';
import {Survey} from './components/survey/survey';
import {InsertionSort} from './components/insertion-sort/insertion-sort';

declare var angular:any;

@NgModule({
  declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
  entryComponents: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],  
  imports: [BrowserModule, UpgradeModule, ReactiveFormsModule]
})
export class AngularModule {
  ngDoBootstrap() {}
}