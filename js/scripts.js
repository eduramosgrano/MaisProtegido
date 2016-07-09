(function() {

  // JavaScript by Grano Studio ®
  // http://www.granostudio.com.br
  var bodyH = document.body.offsetHeight;
  window.onload = function(){
    var el = document.getElementById('header');
    classie.remove(el,'load');
    console.log(bodyH);
    aniIntro();
  };

  //Animation Intro
  function aniIntro(){
    setTimeout(function(){ document.getElementById("item1").style.opacity = "1"; }, 500);
    setTimeout(function(){ document.getElementById("item2").style.opacity = "1"; }, 1000);
    setTimeout(function(){ document.getElementById("item3").style.opacity = "1"; }, 1500);
    setTimeout(function(){ document.getElementById("formulario").style.opacity = "1"; }, 2000);
  }

  //Animation Change Page

  function aniLoad(){

    var el = document.getElementById('header');

    Velocity(el,{ height: bodyH }, { duration: 200, progress: function(elements, percentComplete, timeRemaining, timeStart) {
      if(percentComplete==1){
        //muda a página
        setTimeout(function(){window.open('interna-login.html',"_self");},800);
      }
    } });
    return false;
  }

  var btnEntrar = document.getElementById('btnEntrar');

  btnEntrar.onclick = aniLoad;

  //Mudar de pagina


  //------


  //Form effects
  // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
  if (!String.prototype.trim) {
    (function() {
      // Make sure we trim BOM and NBSP
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }
  var input = document.getElementById( 'form-group' );
  [].slice.call( document.querySelectorAll( 'input' ) ).forEach( function( inputEl ) {
    // in case the input is already filled..
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'ativo' );

    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );

    document.getElementById( 'btnEntrar' ).addEventListener('mouseover',function(){
      if (classie.has(inputEl.parentNode,'ativo')) {
        classie.add( inputEl.parentNode , 'ativo-enviar' );
      } else {
        classie.remove( inputEl.parentNode , 'ativo-enviar' );
      }
    })
    document.getElementById( 'btnEntrar' ).addEventListener('mouseout',function(){
      if (classie.has(inputEl.parentNode,'ativo-enviar')) {
        classie.remove( inputEl.parentNode , 'ativo-enviar' );
      }
    })

  } );


  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'ativo' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'ativo' );
      if(classie.has(ev.target.parentNode,'ativo-enviar')){
        classie.remove( ev.target.parentNode, 'ativo-enviar' );
      }
    }
  }




})();
