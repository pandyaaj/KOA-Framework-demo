angular.module('show.controller', [])
	.directive('showbyid',function(){
		return{
			restrict: 'EA',
			templateUrl: 'views/show.html'
		}
	})
	.controller('ShowController', function ($scope, shows) {

		$scope.shows = shows;
			});	

		// TODO Implement getTrivia and getDate


