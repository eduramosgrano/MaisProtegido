$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});


  //CONFIGURACAO Cartao de credito

  var numeroCartao = $('#cardNumero'),
      inputNome = $('.inputNome'),
      inputSobrenome = $('.inputSobrenome'),
      inputCodSeguranca = $('.inputCodSeguranca');
      numeroCartao.click(function() {
          inputNome.addClass("active");
          inputSobrenome.addClass("active");
          inputCodSeguranca.addClass("active");
      });
});
