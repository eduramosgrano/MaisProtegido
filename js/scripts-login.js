(function() {

  // JavaScript by Grano Studio ®
  // http://www.granostudio.com.br
  var bodyH = document.body.offsetHeight;
  window.onload = function(){
    var el = document.getElementById('header');
    classie.remove(el,'load');
    //console.log(bodyH);
    aniIntro();
  };

  //Animation Intro
  function aniIntro(){
    //setTimeout(function(){ document.getElementById("item1").style.opacity = "1"; }, 500);
    setTimeout(function(){ document.getElementById("item2").style.opacity = "1"; }, 1000);
    setTimeout(function(){ document.getElementById("item3").style.opacity = "1"; }, 1500);
    //setTimeout(function(){ document.getElementById("formulario").style.opacity = "1"; }, 2000);
  }

  //Animation Change Page

  var el = document.getElementById('slide');
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  var etapa1 = document.getElementById('etapa1');
  var etapa2 = document.getElementById('etapa2');

  function aniFim() {
    el.style.left="0";
    el.style.right="auto";
    Velocity(el,{ opacity: 1, width:"100%" }, { duration: 500, progress: function(elements, percentComplete, timeRemaining, timeStart) {
      if(percentComplete==1){
        setTimeout(function(){window.open('interna-fim.html',"_self");},800);
      }
    } });
    return false;

  }

  function aniOut() {
    window.scrollTo(0,0);
    Velocity(el,{ opacity: 0, width:0 }, { duration: 500 });
  }

  function aniLoad(){
    Velocity(el,{ opacity: 1, width:"100%" }, { duration: 500, progress: function(elements, percentComplete, timeRemaining, timeStart) {
      if(percentComplete==1){
        el.style.left="auto";
        el.style.right="0";
        etapa1.style.display="none";
        etapa2.style.display="block";
        classie.add(p2,'active');
        aniOut.call();
        //setTimeout(function(){window.open('interna-login.html',"_self");},800);
      }
    } });
    return false;
  }

  var btnProximo = document.getElementById('btnProximo');
  var btnResgatar = document.getElementById('btnResgatar');

  btnProximo.onclick = aniLoad;
  btnResgatar.onclick = aniFim;

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

    document.getElementById( 'btnProximo' ).addEventListener('mouseover',function(){
      if (classie.has(inputEl.parentNode,'ativo')) {
        classie.add( inputEl.parentNode , 'ativo-enviar' );
      } else {
        classie.remove( inputEl.parentNode , 'ativo-enviar' );
      }
    })
    document.getElementById( 'btnProximo' ).addEventListener('mouseout',function(){
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
