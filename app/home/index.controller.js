(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
        var vm = this;

        vm.user = null;
        vm.searchBooks=search;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

        function search(){
        //    console.log(vm.user.query);
            UserService.getBooks(vm.user).then(function (user) {
                vm.res = user;
                var arr1=[]
                for (var i =0;i<vm.res.length;i++)
                {
                    if ((vm.user.query in vm.res[i].book))
                    {
                        arr1.push(vm.res[i]);
                    }
                }
                vm.res=arr1;
                console.log(vm.res);
            });

        }

    }

})();