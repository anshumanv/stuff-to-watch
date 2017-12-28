$(document).ready(function(){

  $('form').on('submit', function(){
      location.href = "/";
      
      let item = $('form input');
      let list = {item: item.val()};
      
      // Make an ajax request to update data
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
