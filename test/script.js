$(document).ready(function() {
    var $theList = $("#item-group");
    var $gridBtn = $("#view-grid");
    var $listBtn = $("#view-list");
    
    $theList.addClass('grid');
    $gridBtn.addClass('active');
    
    $gridBtn.on('click', function() {
      $listBtn.removeClass('active');
      $(this).addClass('active');
      
      $theList.removeClass('list');
      $theList.addClass('grid');
    });
    
    $listBtn.on('click', function() {
      $gridBtn.removeClass('active');
      $(this).addClass('active');
      
      $theList.removeClass('grid');
      $theList.addClass('list');
    })
  })