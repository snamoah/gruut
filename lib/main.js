'use strict'

const BACKEND_URL = 'https://groot-server.herokuapp.com/download';

$(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();
    Loader.reset();
    Loader.toggleActive();

    var $input = $('input');
    var $result = $('.result');
    var $img = $('#preview');
    var $downloadBtn = $('.js-download');

    var url = $input.val();

    var html = getPage({ url: url });

    html.then(function(data) {
      $img.attr('src', data.url);
      Loader.setPreparingText();

      setTimeout(() => {
        console.log('Data', data);
        Loader.toggleActive();
      }, 400);

      $downloadBtn.attr('href', data.url);
      $input.val('');
      $result.show();
    });

  });
});


function getPage(form) {
  var header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Method': 'POST',
  });

  return new Promise((resolve, reject) => {
    $.get(BACKEND_URL, form)
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};


var Loader = {
  element: $('.dimmer'),
  toggleActive() {
    this.element.toggleClass('active');
  },
  setPreparingText() {
    this.element.find('.loader').text('Preparing File');
  },
  reset() {
    this.element.removeClass('active');
    this.element.find('.loader').text('');

    var $result = $('.result');
    var $img = $('#preview');

    $img.attr('src', '');
    $result.hide();
  },
};

