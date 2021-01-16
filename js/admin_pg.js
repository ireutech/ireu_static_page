$(document).ready(function(){
            $(".a").click(function(){
                var getVal=$("#inputText_ug").val() + "<br> ";
                $("#showText_ug").append(getVal);
            });
         
        });

        $(document).ready(function(){
            $(".a_pg").click(function(){
                var getVal_pg=$("#pg_text").val() + "<br> ";
                $("#showText_pg").append(getVal_pg);
            });
         
        });

         $(document).ready(function(){
            $(".a_diploma").click(function(){
                var getVal_d=$("#d_text").val() + "<br> ";
                $("#showText_d").append(getVal_d);
            });
         
        });

 $(document).ready(function () {
                $(".ug_add").click(function () {
                    var getVal = $("#acd_ug").val() + "<br> ";
                    $("#one").append(getVal);
                    
                });
                 $("a").click(function (event) {
                event.preventDefault();
            });
            $("#one").click(function(){
                 $("#pg").show();
            })
            
                 $(".pg_add").click(function () {
                var getVal1 = $("#acd_pg").val() + "<br> ";
                $("#two").append(getVal1);
            });
            $("#two").click(function (event) {
                event.preventDefault();
                $("#pg1").show();
            });

            });