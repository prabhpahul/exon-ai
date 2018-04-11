 $(document).ready(function () {
 	$('#qualityimg').hover(
         function () {
		 $("#qualitytitle").css("visibility", "visible");
             $("#qualitytitle").fadeIn("3000");
         //    $(".qualitytitle").attr("attrname", "attrvalue"); //attribute
         },
         function () {
			$("#qualitytitle").css("visibility", "hidden");
        //     $(".qualitytitle").attr("attrname", "attrvalue"); //attribute

         }

     );
 	
 	$('#qualityimg2').hover(
         function () {

             $("#qualitytitle2").css("visibility", "visible");
             $("#qualitytitle2").fadeIn("3000");
             //    $(".qualitytitle").attr("attrname", "attrvalue"); //attribute
         },
         function () {

             $("#qualitytitle2").css("visibility", "hidden");
             //     $(".qualitytitle").attr("attrname", "attrvalue"); //attribute

         }

     );
	 $('#qualityimg3').hover(
	     function () {

	         $("#qualitytitle3").css("visibility", "visible");
	         $("#qualitytitle3").fadeIn("3000");
	         //    $(".qualitytitle").attr("attrname", "attrvalue"); //attribute
	     },
	     function () {

	         $("#qualitytitle3").css("visibility", "hidden");
	         //     $(".qualitytitle").attr("attrname", "attrvalue"); //attribute

	     }

	 );


})