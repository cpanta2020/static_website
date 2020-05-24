var demoApp = angular.module('demoApp', ['ngRoute']);
var num1 = Math.round(Math.random() * (1 - 999) + 999);
var num2 = Math.round(Math.random() * (1 - 999) + 999);
var num3 = Math.round(Math.random() * (1 - 999) + 999);
var num4 = Math.round(Math.random() * (1 - 999) + 999);
var num5 = Math.round(Math.random() * (1 - 999) + 999);
var num6 = Math.round(Math.random() * (1 - 999) + 999);
var num7 = Math.round(Math.random() * (1 - 999) + 999);
var num8 = Math.round(Math.random() * (1 - 999) + 999);
var num9 = Math.round(Math.random() * (1 - 999) + 999);
var num10 = Math.round(Math.random() * (1 - 999) + 999);
var num11 = Math.round(Math.random() * (1 - 999) + 999);
var num12 = Math.round(Math.random() * (1 - 999) + 999);
var num13 = Math.round(Math.random() * (1 - 999) + 999);
var num14 = Math.round(Math.random() * (1 - 999) + 999);
var num15 = Math.round(Math.random() * (1 - 999) + 999);
var num16 = Math.round(Math.random() * (1 - 999) + 999);
var num17 = Math.round(Math.random() * (1 - 999) + 999);
var num18 = Math.round(Math.random() * (1 - 999) + 999);
var num19 = Math.round(Math.random() * (1 - 999) + 999);
var num20 = Math.round(Math.random() * (1 - 999) + 999);
var num21 = Math.round(Math.random() * (1 - 999) + 999);
var num22 = Math.round(Math.random() * (1 - 999) + 999);
var num23 = Math.round(Math.random() * (1 - 999) + 999);
var num24 = Math.round(Math.random() * (1 - 999) + 999);

var nnum1 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum2 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum3 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum4 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum5 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum6 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum7 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum8 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum9 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum10 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum11 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum12 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum13 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum14 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum15 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum16 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum17 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum18 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum19 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum20 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum21 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum22 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum23 = Math.round(Math.random() * (1 - 99999) + 99999);
var nnum24 = Math.round(Math.random() * (1 - 99999) + 99999);

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
        $scope.arriba1 = num1;
        $scope.arriba2 = num2;
        $scope.arriba3 = num3;
        $scope.arriba4 = num4;
        $scope.arriba5 = num5;
        $scope.arriba6 = num6;
        $scope.arriba7 = num7;
        $scope.arriba8 = num8;
        $scope.arriba9 = num9;
        $scope.arriba10 = num10;
        $scope.arriba11 = num11;
        $scope.arriba12 = num12;
        $scope.abajo1 = num13;
        $scope.abajo2 = num14;
        $scope.abajo3 = num15;
        $scope.abajo4 = num16;
        $scope.abajo5 = num17;
        $scope.abajo6 = num18;
        $scope.abajo7 = num19;
        $scope.abajo8 = num20;
        $scope.abajo9 = num21;
        $scope.abajo10 = num22;
        $scope.abajo11 = num23;
        $scope.abajo12 = num24;
    });

    demoApp.controller('contactCtrl', function($scope) {
  $scope.message = 'Responda en la caja de texto la respuesta correcta';
  $scope.aarriba1 = nnum1;
  $scope.aarriba2 = nnum2;
  $scope.aarriba3 = nnum3;
  $scope.aarriba4 = nnum4;
  $scope.aarriba5 = nnum5;
  $scope.aarriba6 = nnum6;
  $scope.aarriba7 = nnum7;
  $scope.aarriba8 = nnum8;
  $scope.aarriba9 = nnum9;
  $scope.aarriba10 = nnum10;
  $scope.aarriba11 = nnum11;
  $scope.aarriba12 = nnum12;
  $scope.aabajo1 = nnum13;
  $scope.aabajo2 = nnum14;
  $scope.aabajo3 = nnum15;
  $scope.aabajo4 = nnum16;
  $scope.aabajo5 = nnum17;
  $scope.aabajo6 = nnum18;
  $scope.aabajo7 = nnum19;
  $scope.aabajo8 = nnum20;
  $scope.aabajo9 = nnum21;
  $scope.aabajo10 = nnum22;
  $scope.aabajo11 = nnum23;
  $scope.aabajo12 = nnum24;
    });