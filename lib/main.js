'use strict'

$(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();
    var $input = $('input');
    var url = $input.val();

    console.log(url);

    $input.val('');
  });
})
