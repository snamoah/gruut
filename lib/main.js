'use strict'

$(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();
    var $input = $('input');
    var url = $input.val();

    getPage(url).then(function(data) {
      console.log(data);
    });

    $input.val('');
  });
});


function getPage(link) {
  var header = new Headers({
    'Access-Control-Allow-Origin': '*'
  });

  return fetch(link, header)
    .then(function(response) {
      return Promise.resolve(response.text());
    });
};
