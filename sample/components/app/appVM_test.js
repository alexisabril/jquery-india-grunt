import QUnit from 'steal-qunit';
import AppVM from './appVM';

QUnit.module('AppVM');

QUnit.test('fullname setter', function() {
	var vm = new AppVM({
		first: 'Alexis',
		last: 'Abril'
	});

	equal(vm.attr('fullname'), 'Alexis Abril', 'getter works');

	vm.attr('fullname', 'Dirk Nowitzki');
	equal(vm.attr('first'), 'Dirk', 'setter works');
	equal(vm.attr('last'), 'Nowitzki', 'setter works');
});