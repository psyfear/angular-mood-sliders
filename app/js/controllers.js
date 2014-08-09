'use strict';

/* Controllers */

var moodSlidersApp = angular.module('moodSlidersApp', ['ngCookies', 'ngSlider']);

moodSlidersApp.controller('MoodSliderCtrl', ['$scope','$cookies','$http', '$log', function($scope, $cookies, $http, $log) {

  if($cookies.hugSlider) {
    $scope.hugSlider = $cookies.hugSlider;
  } else {
    $cookies.hugSlider = 0
    $scope.hugSlider = $cookies.hugSlider
  }
  if($cookies.hungerSlider) {
    $scope.hungerSlider = $cookies.hungerSlider;
  } else {
    $cookies.hungerSlider = 0
    $scope.hungerSlider = $cookies.hungerSlider
  }
  if($cookies.funSlider) {
    $scope.funSlider = $cookies.funSlider;
  } else {
    $cookies.funSlider = 0
    $scope.funSlider = $cookies.funSlider
  }
  if($cookies.socialSlider) {
    $scope.socialSlider = $cookies.socialSlider;
  } else {
    $cookies.socialSlider = 0
    $scope.socialSlider = $cookies.socialSlider
  }
  if($cookies.energySlider) {
    $scope.energySlider = $cookies.energySlider;
  } else {
    $cookies.energySlider = 0
    $scope.energySlider = $cookies.energySlider
  }
  if($cookies.comfortSlider) {
    $scope.comfortSlider = $cookies.comfortSlider;
  } else {
    $cookies.comfortSlider = 0
    $scope.comfortSlider = $cookies.comfortSlider
  }

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

  $scope.hugChange = function() {
    $cookies.hugSlider = $scope.hugSlider
  };
  $scope.hungerChange = function() {
    $cookies.hungerSlider = $scope.hungerSlider
  };
  $scope.funChange = function() {
    $cookies.funSlider = $scope.funSlider
  };
  $scope.socialChange = function() {
    $cookies.socialSlider = $scope.socialSlider
  };
  $scope.energyChange = function() {
    $cookies.energySlider = $scope.energySlider
  };
  $scope.comfortChange = function() {
    $cookies.comfortSlider = $scope.comfortSlider
  };

}]);
