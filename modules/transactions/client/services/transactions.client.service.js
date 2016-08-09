//Transactions service used to communicate Transactions REST endpoints
(function () {
  'use strict';

  angular
    .module('transactions')
    .factory('TransactionsService', TransactionsService, 'ProductsService', ProductsService);

  TransactionsService.$inject = ['$resource'];

  function TransactionsService($resource) {
    return $resource('api/transactions/:transactionId', {
      transactionId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }

//product services------------------
    function ProductsService($resource) {
    return $resource('api/products/:productId', {
      productId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
