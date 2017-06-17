angular.module('myApp').config(
	function ($routeProvider, $locationProvider) {
		$routeProvider.
			when('/', {
				template: '<home-list></home-list>'
			}).
			when('/characters', {
				template: '<character-list></character-list>'
			}).
			when('/characters/:characterId', {
				template:'<character-detail></character-detail>'
			}).
			otherwise('/404');
		$locationProvider.html5Mode(true)
	});