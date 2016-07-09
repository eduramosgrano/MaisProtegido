(function() {

  // JavaScript by Grano Studio ®
  // http://www.granostudio.com.br
  var bodyH = document.body.offsetHeight;
  window.onload = function(){
    var el = document.getElementById('slide');
    //classie.remove(el,'load');
    //console.log(bodyH);
    //aniIntro();
    el.style.left="auto";
    el.style.right="0";
    Velocity(el,{ opacity: 0, width:0 }, { duration: 500, progress: function(elements, percentComplete, timeRemaining, timeStart) {
      if(percentComplete==1){

        //setTimeout(function(){window.open('interna-login.html',"_self");},800);
      }
    } });
  };

  //Animation Change Page


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

  //Mudar de pagina


  //------
})();
