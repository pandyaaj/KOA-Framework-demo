angular.module('app', 
	['ngRoute', 'ngResource', 'fact.controller', 'file.controller', 'fact.service', 'show.controller', 'show.service'])
	.filter('trustHTML', function($sce) {return function(text){ return $sce.trustAsHtml(text);}})
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/fact.html',
					controller: 'FactController'
				})
				.when('/shows/:id', {
					templateUrl: 'views/show.html',
					controller: 'ShowController',
					resolve:{
						shows: function ($route, ShowService){
							return ShowService.get({id: $route.current.params.id});
						}
					}
				})
				.when('/file', {
					templateUrl: 'views/file.html',
					controller: 'FileController'
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);



	