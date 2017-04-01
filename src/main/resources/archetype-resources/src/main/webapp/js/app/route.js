$app.config(function($routeProvider, $httpProvider) {

	$routeProvider.
	when("/",{templateUrl : "view/home.html"
	});

	$httpProvider.responseInterceptors.push(interceptor);

});