// Focuses on Name field when page loads
$('#name').focus();


//Other title input appears on selection of Other Job
$('#other-title').hide();
$('#title').change(function () {
    if ($(this).val() == 'other') {
        $("#other-title").show();
    }
    else {
        $("#other-title").hide();
    }
});

//Select a shirt Theme
$('#design :nth-child(1)').hide();
$('#color').prepend("<option>Please select a T-shirt theme</option>");
$('#color').hide();


//shirt options by design
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



//Activities Cost and selections
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


    

            const emDash = $(event.target).parent().text().indexOf("—");
            const indexComma = $(event.target).parent().text().indexOf(",");
            const workshopTime = $(event.target).parent().text().slice(emDash + 1, indexComma);
            const checkboxes = $('[type="checkbox"]');

          for (let i = 0; i < $('[type="checkbox"]').length; i++) {
            const $textCheckbox = $('[type="checkbox"]').eq(i).parent().text();

         if ($textCheckbox.includes(workshopTime) && $(event.target).parent().text() !== $textCheckbox) {
          if ($(event.target).is(":checked")) {
            $(checkboxes[i]).parent().css("text-decoration", "line-through");
            $('[type="checkbox"]').eq(i).attr("disabled", true);
        } else {
            $(checkboxes[i]).parent().css("text-decoration", "none");
            $('[type="checkbox"]').eq(i).attr("disabled", false);
        }
    }
}
  });

//Hides payment options
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

 
//Name validation with regex
const nameVal = () => {
    const isValidName = () => {
        const name = $('#name').val();
        const nameCheck = /^[a-zA-Z ]+$/.test(name);
        return nameCheck;
    }
    if (isValidName() === true) {
        $('label[for="name"]').css('color', '');
        $('#name').css('border', '');
    } else {
        $('label[for="name"]').css('color', 'red');
        $('#name').css('border', '2px solid red');
    }
}

//Name field  event listener
$('#name').on('change', function () {
    nameVal();
});


//Email validation with regex
const emailVal = () => {
    const isValidEmail = () => {
        const email = $('#mail').val();
        const emailCheck = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/i.test(email);
        return emailCheck;
    }
    if (isValidEmail()) {
        $('label[for="mail"]').css('color', '');
        $('#mail').css('border', '');
    } else {
        $('label[for="mail"]').css('color', 'red');
        $('#mail').css('border', '2px solid red');
    }
}

//Email field event listener
$('#mail').on('change', function () {
    emailVal();
});

//Activities checked checker function
const checked = () => {
    const activityCount = $('.activities input:checkbox:checked').length;
    const activityLegend = $('.activities legend');
    if (activityCount > 0) {
        activityLegend.css('color', '');
    } else {
        activityLegend.css('color', 'red');
    }
    return activityCount;
}

//Activities checkboxes event listener and validation
$('.activities').on('change', function () {
    checked();
});

//CC number regex for Mastercard's, Visa's, Amex, Discover, and Diner's Club. Regex was taken from http://www.informit.com/articles/article.aspx?p=1223879&seqNum=12
const isValidCC = () => {
    const ccNum = parseInt($('#cc-num').val());
    const card = /^(5[1-5]\d{14})|(4\d{12}(\d{3})?)|(3[47]\d{13})|(6011\d{14})|((30[0-5]|36\d|38\d)\d{11})$/.test(ccNum);
    if (card) {
        return true;
    }
}

//Zip code regex 5 digits
const isValidZip = () => {
    const zipCode = $('#zip').val();
    const zipCodeCheck = /(^\d{5}$)/.test(zipCode);
    return zipCodeCheck;
}

//CVV code regex for 3 digits
const isValidCVV = () => {
    const cvv = $('#cvv').val();
    const cvvCheck = /^[0-9]{3}$/.test(cvv);
    return cvvCheck;
}

//Credit Card field Validation for number, zip code and cvv
    const cardVal = () => {
        if (isValidCC()) {
         $('label[for="cc-num"]').css('color', '');
         $('#cc-num').css('border', '');
     } else {
         $('label[for="cc-num"]').css('color', 'red');
         $('#cc-num').css('border', '2px solid red');
     }
        if (isValidZip()) {
         $('label[for="zip"]').css('color', '');
         $('#zip').css('border', '');
     } else {
         $('label[for="zip"]').css('color', 'red');
         $('#zip').css('border', '2px solid red');
     } 
       if (isValidCVV()) {
         $('label[for="cvv"]').css('color', '');
         $('#cvv').css('border', '');
     } else {
         $('label[for="cvv"]').css('color', 'red');
         $('#cvv').css('border', '2px solid red');
    }
    }


//Credit card field event listener for number, zip code and cvv
$('#cc-num, #zip, #cvv').on('change', function () {
    cardVal();
});

//Credit card selected function to return boolean for master validation
const isValidPayment = () => {
    const paymentVal = $('#payment :selected').text();
    if (paymentVal === '' || paymentVal === 'Credit Card') {
        if (isValidCC() && isValidZip() && isValidCVV()) {
            return true;
        }
        return false;
    }
    return true;
}

//Page validation function
const masterVal = () => {
    if (isValidName() && isValidEmail() && checked() > 0) {
        if ($('#payment :selected').val() === 'select_method') {
            return false;
            if ($('#payment :selected').val() === 'credit card') {
                if (isValidPayment()) {
                    return true;
                }
                return false;
            }
            return true;
        }
    }
}

//Submit Button 
$('button').on('click', function (e) {
    if (masterVal()) {
    } else {
        e.preventDefault();
        nameVal();
        emailVal();
        checked();
        cardVal();
        alert('Please fill out all fields.');
    }});
