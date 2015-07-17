import $ from 'jquery';
import can from 'can';
import 'can/view/stache/';
import 'components/app/';

$('body').html(can.stache('<jquery-app fullname="Alexis Abril"></jquery-app>')());