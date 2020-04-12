$('body').on('click','#Increase', function(){
    $('h2').text(Number($('h2').text())+1);
  });

  $('body').on('click','#Decrease', function(){
    $('h2').text(Number($('h2').text())-1);
  });