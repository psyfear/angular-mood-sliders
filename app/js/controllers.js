'use strict';

/* Controllers */

// var moodSlidersApp = angular.module('moodSlidersApp', ['ngCookies', 'ngSlider', 'firebase']);

var moodSlidersControllers = angular.module('moodSlidersControllers', ['firebase']);

moodSlidersControllers.controller('MoodSliderCtrl', ['$scope','$http', '$log', 'Sliders', '$firebase',
  function($scope, $http, $log, Sliders, $firebase) {

    var record = Sliders.$asObject();

    record.$bindTo($scope, "sliders").then(function() {
      console.log($scope.sliders); // {foo: "bar"}
      console.log($scope.sliders.hug_id);
      console.log($scope.sliders.hunger_id);
      console.log($scope.sliders.fun_id);
      console.log($scope.sliders.social_id);
      console.log($scope.sliders.energy_id);
      console.log($scope.sliders.comfort_id);
    });

    $scope.hugOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
    $scope.hungerOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
    $scope.funOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
    $scope.socialOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
    $scope.energyOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
    $scope.comfortOptions = {
      from: 1,
      to: 100,
      step: 1,
      scale: [0, '|', 50, '|' , 100],
      dimension: " %"
    };
}]);
