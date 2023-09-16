var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove" , function(details) { 
   var rectanglelocation = rect.getBoundingClientRect();
   var insiderectvalue=  details.clientX - rectanglelocation.left;

   if ( insiderectvalue< rectanglelocation.width/2 ){ 
      var redColor = gsap.utils.mapRange(0 , rectanglelocation.width/2 , 255, 0 , insiderectvalue);
      gsap.to(rect , { 
         backgroundColor : `rgb(${redColor} ,0 ,0)`,
         ease : Power4,
         color : "white",
         color : `rgb(0 , ${blueColor} , 0)`,
      }) 

   }
    else{ 
      var blueColor = gsap.utils.mapRange(rectanglelocation.width/2 , rectanglelocation.width  , 0, 255 , insiderectvalue);
      gsap.to(rect , { 
         backgroundColor : `rgb(0 ,0 , ${blueColor})`,
         ease : Power4,
         color : `rgb(0 , ${blueColor} , 0)`,
      }) 
    }
})

rect.addEventListener("mouseleave", function( ) { 
   gsap.to(rect, { 
      backgroundColor : "white",
      ease : Power4,
      color : "black",
   })
} )