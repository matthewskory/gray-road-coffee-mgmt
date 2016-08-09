(function () {
  'use strict';

  angular
    .module('transactions')
    .controller('TransactionsListController', TransactionsListController,'ProductsListController', ProductsListController);

  TransactionsListController.$inject = ['TransactionsService', 'ProductsService'];

  
  function TransactionsListController(TransactionsService) {
    var vm = this;

    vm.transactions = TransactionsService.query();
  }
// gets the product list-------------------------------
    function ProductsListController(ProductsService) {
    var vm = this;

    vm.products = ProductsService.query();
  }

})();
