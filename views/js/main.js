window.onload = function(){
	$("body").append('<table id="cats"></table>');
	require(['list'], function(list) {
		list();
	});
}
