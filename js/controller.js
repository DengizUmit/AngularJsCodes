myAngular.controller("myControl",function($scope){

    $scope.num1 = 3;
    $scope.num2 = 2;

    $scope.job = "Computer Engineer";

    $scope.person = { firstName : "Ümit", lastName : "Dengiz"};

    $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    $scope.quantity  = 0;
    $scope.price = 0 ;

    $scope.languages = ["HTML", "CSS", "JavaScript", "AngularJS", "RaeactJS", "VueJS", "NodeJS"];

    $scope.languagesAll = [
        {name : 'Ragnar', languages : 'AngularJS'},
        {name : 'Lagertha', languages : 'RaeactJS'},
        {name : 'Bjorn', languages : 'VueJS'},
        {name : 'Atheltsan', languages : 'NodeJS'}
    ];
});