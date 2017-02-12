(function () {
    'use strict';

    angular
        .module('app')
        .controller('Messages.IndexController', Controller);

    function Controller($window, UserService, FlashService) {
        var vm = this;
        vm.user = null;
        vm.book = null;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }
    }

})();