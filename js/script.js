$('#name').focus();

$('#other-title').hide();
$('#design :nth-child(1)').hide();
$('#color').prepend("<option>Please select a T-shirt theme</option>");
$('#color :not(:first)').hide();

$("#design").change(function(){
     if($(this).val() == 'js puns'){
        //  $("#color :nth-child(1)").hide();
         $("#color").children().hide();
         $("#color :nth-child(2)").show(); 
         $("#color :nth-child(3)").show(); 
         $("#color :nth-child(4)").show(); 
     } else {
         $("#color :nth-child(-1n+4)").hide();  
         $("#color :nth-child(n+5)").show();  
    }});


    