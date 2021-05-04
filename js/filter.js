/*
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
*/

myAngular.filter("myCustomFormat", ["hex", function(hex){
    return function(x){
        return hex.specialFunction(x);
    }
}]);