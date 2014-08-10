'use strict';

/* Services */

var moodSlidersServices = angular.module('moodSlidersServices', ['firebase']);

moodSlidersServices.factory('Sliders', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
})
