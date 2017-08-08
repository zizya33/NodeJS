define(function(){
  return function(){
  	$('#cats').html('');
      $('#cats').append('<tr><td>Имя</td><td>Возраст</td><td>Стоимость</td><td>Контакты</td></tr>');
    $.getJSON('../json/works.json', function(data) {
            for(var i=0;i<data.data.length;i++){
                $('#cats').append('<tr><td>' + data.data[i].name + '</td><td>'+ data.data[i].age +'</td><td>' + data.data[i].cost +
                    '</td><td>'+ data.data[i].contacts +'</td></tr>');
            }
    });
	}
});