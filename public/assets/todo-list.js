$(document).ready(function(){

  $('form').on('submit', function(){

      let item = $('form input');
      let list = {item: item.val()};
      $.ajax({
        type: 'POST',
        url: '/',
        data: list,
        success: function(data){
          //Reload the page on successfull addition
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      let item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          //Reload the page on successful removal
          location.reload();
        }
      });
  });

});
