myAngular.run(function($rootScope){
    $rootScope.color = "Pink";
});


myAngular.controller("filterControl",function($scope){

    $scope.languages = ["Ada", "Java", "C", "Python", "C#"];
    $scope.names = [
        {name: "Misko", language : "Java"},
        {name: "Anders", language : "C#"},
        {name: "Fred", language : "Ada"},
        {name: "Ramiz", language : "Python"},
        {name: "Ezel", language : "C"}
    ];
    $scope.orderMe = function(par){
        $scope.myOrder = par;
    }
});

myAngular.controller("serviceControl",function($scope, $http){
    $http({
        method : "GET",
        url : "customers.php"
    }).then(function(response){
        $scope.Results = response.data.records;
        /*$scope.message = response.data;
        $scope.statusCode = response.status;
        $scope.statusText = response.statusText;*/
    }, function(response){
        $scope.message = response.data;
        $scope.statusCode = response.status;
        $scope.statusText = "Hay Aksi!!1";

    });
});


/*
myAngular.controller("serviceControl",function($scope, $location){
    $scope.message = $location.absUrl();
});

myAngular.controller("serviceControl",function($scope, $timeout){
    $scope.message = "Hi";
    $timeout(function(){
        $scope.message = "How are you ?";
    },1000);
});

myAngular.controller("serviceControl",function($scope, $interval){
    $scope.message = new Date().toLocaleTimeString();
    $interval(function(){
        $scope.message = new Date().toLocaleTimeString();
    },1000);
});

myAngular.controller("serviceControl",function($scope, hex){
    $scope.message = hex.specialFunction(256);
});

myAngular.controller("serviceControl",function($scope, hex){
    $scope.numbers = [255,250, 200];
});
*/

myAngular.controller("limitControl",function($scope){

    $scope.names = ["Nore", "Oliver", "Ava", "Emmet", "Nora", "Vivienne", "Theodore"];
    $scope.txt = "AngularJS - Superheroic JS MVC";

});


myAngular.controller("myControl",function($scope){

    $scope.price = 382;

    $scope.today = new Date();

    $scope.name = "Ümit Dengiz";

    $scope.customer = {
        "name" : "Ragnar Lothbrok",
        "country" : "Kattegat",
        "age" : 31
    }

    $scope.username = "Ümit Dengiz";
    $scope.eposta = "umitdengiz@gmail.com";

    $scope.firstName = "Ümit";
    $scope.lastName = "Dengiz";

    $scope.fullName = function(){
        return $scope.firstName+ " " +$scope.lastName;
    }

    $scope.color = "Blue";

    $scope.num1 = 3;
    $scope.num2 = 2;

    $scope.job = "Computer Engineer";

    $scope.person = { firstName : "Ümit", lastName : "Dengiz"};

    $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    $scope.quantity  = 0;
    //$scope.price = 0 ;

    $scope.names = ["Nore", "Oliver", "Ava", "Emmet", "Nora", "Vivienne", "Theodore"];

    $scope.languages = ["HTML", "CSS", "JavaScript", "AngularJS", "RaeactJS", "VueJS", "NodeJS"];
    $scope.txt = "AngularJS - Superheroic JS MVC";

    $scope.languagesAll = [
        {name : 'Ragnar', languages : 'AngularJS'},
        {name : 'Lagertha', languages : 'RaeactJS'},
        {name : 'Bjorn', languages : 'VueJS'},
        {name : 'Atheltsan', languages : 'NodeJS'}
    ];

});