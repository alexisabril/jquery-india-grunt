import can from 'can';
import 'can/map/define/';

var AppVM = can.Map.extend({
	define: {
		fullname: {
			get: function() {
				return this.attr('first') + ' ' + this.attr('last');
			},
			set: function(name) {
				var parts = name.split(' ');
				this.attr({
					first: parts[0],
					last: parts[1]
				});
			}
		}
	}
});

window.VM = AppVM;

export default AppVM;