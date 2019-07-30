$('#name').focus();

$('#other-title').hide();
$('#design :nth-child(1)').hide();
$('#color').prepend("<option>Please select a T-shirt theme</option>");
$('#color :not(:first)').hide();

$("#design").change(function(){
     if($(this).val() == 'js puns'){
         $("#color").children().hide();
         $("#color :nth-child(2)").show(); 
         $("#color :nth-child(3)").show(); 
         $("#color :nth-child(4)").show(); 
     } else {
         $("#color :nth-child(-1n+4)").hide();  
         $("#color :nth-child(n+5)").show();  
    }});


let totalActivityCost = $('.activities').append('div');






























$('#payment :nth-child(1)').hide();
$('#credit-card').hide();
$('div p').eq(0).hide();
$('div p').eq(1).hide();

$('#payment').change(function () {
    if ($(this).val() == 'credit card') {
        $("#credit-card").show();
        $('div p').eq(0).hide();
        $('div p').eq(1).hide();
    } else if ($(this).val() == 'paypal') {
        $('div p').eq(0).show();
        $('#credit-card').hide();
        $('div p').eq(1).hide();
    } else if ($(this).val() == 'bitcoin') {
        $('div p').eq(1).show();
        $('#credit-card').hide();
        $('div p').eq(0).hide();

    }});