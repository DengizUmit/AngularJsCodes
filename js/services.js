myAngular.service("hex", function(){
    this.specialFunction = function(par){
        return par.toString(16);
    }
});