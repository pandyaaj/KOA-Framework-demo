angular.module('fact.controller', [])
	.directive('showsdir',function(){
		return{
			restrict: 'EA',
			templateUrl: 'views/render.html'
		}
	})
	.controller('FactController', function ($scope, factResource) {

		$scope.getMathFact = function () {
			factResource.query({
				//type: 'math',

				number: $scope.number,
				save: $scope.save
			}, function (response) {
				
				$scope.fact = response;
			});	
		};

		// TODO Implement getTrivia and getDate

});