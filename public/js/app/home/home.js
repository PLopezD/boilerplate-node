(function(){
  'use strict';
  angular
    .module('app')
    .controller('HomeController', HomeController);
        
       
    function HomeController() {
    	console.log("msg")
      var vm = this;
     vm.haha = [2,3,5,7]
    }
}());