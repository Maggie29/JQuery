/*$(document).ready(function(){
  alert("cargo JQuery");
});*/

$( ()=> {
  $(".popup-link").on("click",(e)=>{
    e.preventDefault();
    $(".brand-popup").show()
  });
  $(".brand-popup .popup-close").on('click',(e) => {
   e.preventDefault();
   $('.brand-popup').hide();
 });
});
