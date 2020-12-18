

function stickyMenu(){
  var sticky = document.getElementById('sticky');
  if(window.pageYOFFset > 220){
    sticky.classList.add('sticky');
  }
  else{
    sticky.classList.remove('sticky');
  }
}
window.onscroll = function(){
  stickyMenu();
}






   var Push  = document.getElementById("btnpush")
    var legume = document.getElementById("legume");
      var fruits = document.getElementById("fruits");
        var boisson = document.getElementById("boisson");
          var confitures = document.getElementById("confitures");
    document.getElementById("btnLegume").addEventListener("click", function(){


        legume.style.display="block";
        fruits.style.display="none";
        boisson.style.display="none";
        confitures.style.display="none";

    })


 document.getElementById("btnFruits").addEventListener("click", function(){


   legume.style.display="none";
   fruits.style.display="block";
   boisson.style.display="none";
   confitures.style.display="none";
} )

 document.getElementById("btnBoisson").addEventListener("click", function(){


   legume.style.display="none";
   fruits.style.display="none";
   boisson.style.display="block";
   confitures.style.display="none";
} )

 document.getElementById("btnConfitures").addEventListener("click", function(){


   legume.style.display="none";
   fruits.style.display="none";
   boisson.style.display="none";
   confitures.style.display="block";
} )

document.getElementById("btnpush").addEventListener("click", function(){


  legume.style.display="block";
  fruits.style.display="block";
  boisson.style.display="block";
  confitures.style.display="block";
} )
