angular.module('fact.service', [])
	.factory('factResource', function ($resource) {
		return $resource('/api');
	});