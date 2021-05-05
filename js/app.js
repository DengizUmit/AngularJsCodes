/*var myAngular = angular.module("myAngular",[]);*/



var myAngular = angular.module("myAngular", ["ngRoute"]);

myAngular.directive("testDirective", function(){
    return {

        // class >>restrict : "C"   -----  Restrictions ; E for Element, A for Attribute, C for Class, M for Element, default value : EA

        // comment line
        restrict : "M",
        replace  : true,
        template : "<h3>Create - AngularJs Directive</h3>"
    };
});