new WOW().init();
jQuery(document).ready(function($) {
  var video = $('.thumb'),
      boxVideo = $('.videoBox'),
      btnClose = $('.videoBox .close'),
      container = $('.whitelabel'),
      ytcode = "",
      btnytcode ="";

  video.on('click', function(){
      btnytcode = $(this).parent().data("ytcode");
      //alert(btnytcode);
      ytcode = 'https://www.youtube.com/embed/'+btnytcode+'?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1';
      boxVideo.addClass('active');
      boxVideo.addClass('animated');
      boxVideo.addClass('zoomIn');
      $(".videoYoutube").attr('src',ytcode);
      $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  btnClose.on('click', function(){
      boxVideo.removeClass('active');
      boxVideo.removeClass('zoomIn');
      $(".videoYoutube").attr('src','');

  });

});
