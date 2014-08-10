'use strict';

/* App Module */

var moodSlidersApp = angular.module('moodSlidersApp', [
  'firebase',
  'moodSlidersControllers',
  'moodSlidersServices',
  'vr.directives.slider'
]);

moodSlidersApp.value('fbURL', 'https://intense-heat-7153.firebaseio.com/')
