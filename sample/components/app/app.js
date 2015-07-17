import can from 'can';
import template from './app.stache!';
import AppVM from './appVM';

var App = can.Component.extend({
	tag: 'jquery-app',
	template: template,
	viewModel: AppVM
});

export default App;