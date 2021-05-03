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

myAngular.filter("myCustomFormat", function(){
    return function(par){
        var i, harf, kelime = "";
        for( i = 0; i<par.length;i++){
            harf = par[i];
            if( i%2 == 0){
                harf = harf.toUpperCase();
            }
            kelime += harf;
        }
        return kelime;
    }
});

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