//========================================

 var elem = document.querySelector('.tap-target');
  var instance = M.TapTarget.init(elem, options);
   var instance = M.TapTarget.getInstance(elem);


$(document).ready(function(){
    $('.tap-target').tapTarget();
  });
          
  instance.next();
  instance.next(3);
  instance.destroy();
 


 var elem = document.querySelector('.collapsible-header');
  var instance = M.Collapsible.init(elem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible-header').collapsible();
  });

   var instance = M.Collapsible.getInstance(elem);

   instance.open(3);
   instance.close(3);
   instance.destroy();
