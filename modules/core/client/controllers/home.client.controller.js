(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

	HomeController.$inject = ['ProductsService', '$resource', 'EmployeesService', 'CustomersService', 'DepartmentsService'];
	function HomeController(ProductsService, $resource, EmployeesService, CustomersService, DepartmentsService) {
    var vm = this;
    vm.products = ProductsService.query();
    vm.employees = EmployeesService.query();
    vm.customers = CustomersService.query();
    vm.departments = DepartmentsService.query();
  } 
}());
