angular.module('myApp').component('homeList', {
	templateUrl: 'js/home/home-list.template.html',
	controller: function HomeListController($http) {
		$http.get('data/homes.json')
		.then((response) => this.homes = response.data)
	}
})

