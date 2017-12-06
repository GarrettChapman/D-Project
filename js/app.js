angular.module('davesApp', ["ui.router"])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "/views/home.html",
    controller: 'mainCtrl'
  })


.state('about', {
  url: '/about',
  templateUrl: "/views/about.html",
  controller: 'aboutCtrl'
})

.state('testimonials', {
  url: '/testimonials',
  templateUrl: "/views/testimonials.html",
  controller: 'testimonialsCtrl'
})

$urlRouterProvider
.otherwise('/');

});
