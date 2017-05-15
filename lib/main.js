'use strict'

$(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();

    var form = new FormData(document.getElementById('#form'));

    console.log('Form data', form);
    var $input = $('input');
    var url = $input.val();

    var html = getPage(form);
    html.then(function(data) {
      console.log('Data', data);
    });

    $input.val('');
  });
});


function getPage(form) {
  var header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Method': 'POST',
  });

  var data = {
    method: 'POST',
    header: header,
    body: form,
  };

  return new Promise((resolve, reject) => {
    fetch('https://groot-server.herokuapp.com/download', data)
      .then(function(response) {
        resolve(response);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};
