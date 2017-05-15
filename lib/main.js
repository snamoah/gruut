'use strict'

const BASE_URL = 'http://localhost:5000';
const FETCH_URL = `${BASE_URL}/fetch/file`;
const DOWNLOAD_URL = `${BASE_URL}/download`;

$(function() {
  $('#form').on('submit', function(e) {
    e.preventDefault();
    Loader.reset();
    Loader.toggleActive();

    var $input = $('input');
    var $result = $('.result');
    var $img = $('#preview');
    var $video = $('.embed');
    var $downloadBtn = $('.js-download');

    var url = $input.val();

    var html = getPage({ url: url });

    html.then(function(data) {

      Loader.setPreparingText();

      if (data.type === 'image') {
        $img.attr('src', data.url);
      } else {
        $video
          .attr('data-url', data.url)
          .attr('data-placeholder', data.thumbnail);
      }

      //set view
      toggleResultView(data.type);

      // set download link
      $downloadBtn.attr('href', data.url);
      $downloadBtn.attr('data-filename', data.name);
      $downloadBtn.attr('data-type', data.type);



      setTimeout(() => {
        Loader.toggleActive();
      }, 400);
      $input.val('');
      $result.show();
    })
    .catch((err) => {
      Loader.reset();
    });

  });

  /**
  $('.js-download').on('click', (e) => {
    e.preventDefault();

    const $el = $(e.currentTarget);

    $el.toggleClass('loading');
    const url = $el.attr('href');
    const filename = $el.data('filename');
    const type = $el.data('type');

    console.log(url, filename, type);
    $.get(`${DOWNLOAD_URL}?url=${encodeURIComponent(url)}&filename=${filename}&type=${type}`)
      .done((response) => {
        console.log('Response', response);
        $('.js-download').toggleClass('loading')
      })
      .fail((err) => {
        console.log(err);
      });
  });
  **/
});


function getPage(form) {
  var header = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Method': 'POST',
  });

  return new Promise((resolve, reject) => {
    $.get(FETCH_URL, form)
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
    var $video = $('.embed');

    $img.attr('src', '');
    $video.attr('data-url', '').attr('data-placeholder', '');
    $result.hide();
  },
};

const toggleResultView = (view) => {
  const  $img = $('.result .image');
  const $video = $('.embed');


  // initially hide both elements
  $video.hide();
  $img.hide();

  switch(view) {
    case 'image':
      $img.show();
      break;
    case 'video':
      $video.embed();
      $video.show();
      break;
  }
}
