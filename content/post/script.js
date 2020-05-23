var demoApp = angular.module('demoApp', ['ngRoute']);

    // configure our routes
    demoApp.config(function($routeProvider) {
  $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutCtrl'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactCtrl'
            });
    });

    // create the controller and inject Angular's $scope
 demoApp.controller('mainCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'En este post vamos a aprender cómo realizar sumas con y sin llevadas.';
        $scope.message1 = 'Pasos para realizar sumas sin llevadas:';
        $scope.message2 = '1.- Colocar los sumandos uno debajo del otro, de manera que coincidan las unidades en la misma columna.';
        $scope.message3 = '2.- Sumar cada columna por separado empezando por las unidades.';
        $scope.message4 = '3.-  El resultado de la suma se escribe debajo de cada columna y de la línea de resultado.';
        $scope.message5 = 'Vamos a ver un ejemplo. Sumemos 83 + 14';
        $scope.message6 = 'Ponemos el 83 y debajo 14, haciendo que coincidan las unidades, es decir, el 3 y el 4.';
        $scope.message7 = 'Sumamos 3 + 4 = 7 y lo ponemos debajo de la columna de las unidades.';
        $scope.message8 = 'Sumamos 8 + 1 = 9 y lo ponemos debajo de la columna de las decenas.';
        $scope.message9 = 'Y como resultado tendremos 97.';
        $scope.message10 = 'Pasos para realizas sumas con llevadas:';
        $scope.message11 = 'Cuando al sumar una columna obtengamos un número de dos dígitos, las decenas se las sumaremos al número siguiente.';
        $scope.message12 = 'Veamos un ejemplo. Sumaremos 46 + 27.';
        $scope.message13 = 'Primero ponemos el 46 y debajo, haciendo que coincidan las unidades, pondremos el 27.';
        $scope.message14 = 'Sumamos primero las unidades 6 + 7 = 13, el 3 lo ponemos debajo en la columna de las unidades y el 1 lo sumamos a la columna de las decenas.';
        $scope.message15 = '1 + 4 + 2 = 7, el 7 lo colocamos debajo, en la columna de las decenas.';
        $scope.message16 = 'Y el resultado de la suma es 73';
    });

    demoApp.controller('aboutCtrl', function($scope) {
  $scope.message = 'Responda en la caja de texto la respuesta correcta';
    });

    demoApp.controller('contactCtrl', function($scope) {
  $scope.message = 'Responda en la caja de texto la respuesta correcta';
    });