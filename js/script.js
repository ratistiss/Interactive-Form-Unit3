$('#name').focus();

$('#other-title').hide();

$('#title').change(function () {
    if ($(this).val() == 'other') {
        $("#other-title").show();
    }
    else {
        $("#other-title").hide();
    }
});



$('#design :nth-child(1)').hide();
$('#color').prepend("<option>Please select a T-shirt theme</option>");
$('#color').hide();

$("#design").change(function(){
     if($(this).val() == 'js puns'){
         $('#color').show();
         $("#color :nth-child(1)").hide(); 
         $("#color :nth-child(5)").hide();
         $("#color :nth-child(6)").hide();
         $("#color :nth-child(7)").hide();
         $("#color :nth-child(2)").show(); 
         $("#color :nth-child(3)").show(); 
         $("#color :nth-child(4)").show(); 
     } else {
         $('#color').show();
         $("#color :nth-child(-1n+4)").hide();  
         $("#color :nth-child(n+5)").show();  
    }});



const totalDiv = $('.activities').append('<label>');
let total = "0";

$(".activities")
    .find("input")
    .change(
        function (e) {
            const targetParent = e.target.parentNode.textContent; 
            const costFinder = "$";
            const costIndex = targetParent.indexOf(costFinder);
            const cost = targetParent.slice(costIndex + 1);
            
            if ($(e.target).prop("checked") === true) {
                
                total = parseInt(total) + parseInt(cost);
            } else {
                
                total = parseInt(total) - parseInt(cost);
            }
            $('.activities :nth-child(9)').text("Total Cost: $" + total);


        });























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


var nameRegex = '/[a-z][A-Z]\w+/';
var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'; 
var creditCardRegex = '^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$';
var zipRegex = '^[0-9]{5}$';
var cvvRegex = '^[0-9]{3}$';


//Validation functions
const validName = () => {
    let result = '/[a-z][A-Z]\w+/'.test($("#name").val());

    if (!result) {
        invalidSpans(":Enter A Valid Name", "name");
    }
    return result;
};