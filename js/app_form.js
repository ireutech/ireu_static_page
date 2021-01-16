// $(document).ready(function () {
//     //Initialize tooltips
//     $('.nav-tabs > li a[title]').tooltip();
    
//     //Wizard
//     $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
//         var $target = $(e.target);
//         if ($target.parent().hasClass('disabled')) {
//             return false;
//         }
//     });

//     $(".next-step").click(function (e) {
//         let one=$("#prg_type").val()!=="0";
//         let two=$("#prg_name").val()!=="0";
//         let fname=$("#first_name").val()!=="";
//         let lname=$("#last_name").val()!=="";
//         let email=$("email").val()!=="";
//         let dob=$("#dob").val()!=="";
//         let mobile_number=$("#mobile_number").val()!=="";
//         let gender=$("#gender").val()!=="0";
//         let religion=$("#religion").val()!=="0";
//         let category=$("#category").val()!=="0";
//         let blood_group=$("#blood_group").val()!=="0";
//         let physical_status=$("#physical_status").val()!=="0";
//         let father_name=$("#father_name").val()!=="";
//         let f_phone_no=$("#f_phone_no").val()!=="";
//         let mother_name=$("#mother_name").val()!=="";
//         let m_phone_no=$("#m_phone_no").val()!=="";
//         let parents_income=$("#parents_income").val()!=="0";
//         let preferred_contact=$("#preferred_contact").val()!=="0";


//         if((one && two) || (fname && lname && email && dob && mobile_number && gender && religion && category && blood_group && physical_status && father_name && f_phone_no && mother_name && m_phone_no && parents_income && preferred_contact)){
//         var $active = $('.nav-tabs li>.active');
//         $active.parent().next().find('.nav-link').removeClass('disabled');
//         nextTab($active);
//         }
        
//     });
    
//     $(".prev-step").click(function (e) {
//         var $active = $('.nav-tabs li>a.active');
//         prevTab($active);
//     });
// });

// function nextTab(elem) {
//     $(elem).parent().next().find('a[data-toggle="tab"]').click();
// }
// function prevTab(elem) {
//     $(elem).parent().prev().find('a[data-toggle="tab"]').click();
// }




function filladd()
{
	 if(filltoo.checked == true) 
     {
             var cor_addr_line11 =document.getElementById("cor_addr_line1").value;
			 var cor_addr_line21 =document.getElementById("cor_addr_line2").value;
             var cor_state1 =document.getElementById("cor_state").value;
             var cor_city1 =document.getElementById("cor_city").value;
             var cor_pincode1 =document.getElementById("cor_pincode").value;
          

           
            var copy_addr_line1 =cor_addr_line11;
            var copy_addr_line2 =cor_addr_line21 ;
            var copy_cor_state=cor_state1;
            var copy_cor_city=cor_city1
            var copy_pincode =cor_pincode1 ;

            
            document.getElementById("pre_addr_line1").value = copy_addr_line1;
            document.getElementById("pre_addr_line2").value = copy_addr_line2;
            document.getElementById("pre_state").value = copy_cor_state;
            document.getElementById("pre_city").value = copy_cor_city;
            document.getElementById("pre_pincode").value = copy_pincode;

	 }
	 else if(filltoo.checked == false)
	 {
		document.getElementById("pre_addr_line1").value = "";
            document.getElementById("pre_addr_line2").value = "";
            document.getElementById("pre_state").value = "";
            document.getElementById("pre_city").value = "";
            document.getElementById("pre_pincode").value = "";
	 }
}


jQuery(document).ready(function() {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function() {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = jQuery(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = jQuery(this).val();

			if( thisValue == "" || thisValue=="0") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			jQuery(document).find('.wizard-fieldset').each(function(){
				if(jQuery(this).hasClass('show')){
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if(jQuery(this).attr('data-attr') == formAtrr){
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function() {
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev =jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		jQuery(document).find('.wizard-fieldset').each(function(){
			if(jQuery(this).hasClass('show')){
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if(jQuery(this).attr('data-attr') == formAtrr){
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = jQuery(this).val();
			if( thisValue == "" ) {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = jQuery(this).val();
		if(tmpThis == '' ) {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});
