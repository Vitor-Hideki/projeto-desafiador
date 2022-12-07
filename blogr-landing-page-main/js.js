$(document).ready(function() {
    var botao = $('.bt1');
    var dropDown = $('.ul-product');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

$(document).ready(function() {
    var botao = $('.bt2');
    var dropDown = $('.ul-company');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt3');
    var dropDown = $('.ul-connect');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });