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
$('#payment :nth-child(1)').remove();
$('#credit-card').show();
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
    const $validName = () => {
        const name = $('#name').val();
        const nameCheck = /^[a-zA-Z ]+$/.test(name);
        return nameCheck;
    }

    const $name = () => {
    if ($validName() === true) {
        $('label[for="name"]').css('color', '');
        $('#name').css('border', '');
    } else {
        $('label[for="name"]').css('color', 'red');
        $('#name').css('border', '2px solid red');
    }
}

//Name field  event listener
$('#name').on('change', function () {
    $name();
});


//Email validation with regex
    const $validEmail = () => {
        const email = $('#mail').val();
        const emailCheck = /^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)$/i.test(email);
        return emailCheck;
    }

const $email = () => {
    if ($validEmail()) {
        $('label[for="mail"]').css('color', '');
        $('#mail').css('border', '');
    } else {
        $('label[for="mail"]').css('color', 'red');
        $('#mail').css('border', '2px solid red');
    }}

  

//Email field event listener
$('#mail').on('change', function () {
    $email();
});

//Activities checked checker function
const $checked = () => {
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
    $checked();
});


//CC number regex 
const $validCC = () => {
    const ccNum = parseInt($('#cc-num').val());
    const card = /^(\d{13,16})$/.test(ccNum);
    if (card) {
        return true;
    }
}

//Zip code regex 5 digits
const $validZip = () => {
    const zipCode = $('#zip').val();
    const zipCodeCheck = /(^\d{5}$)/.test(zipCode);
    return zipCodeCheck;
}

//CVV code regex for 3 digits
const $validCVV = () => {
    const cvv = $('#cvv').val();
    const cvvCheck = /^[0-9]{3}$/.test(cvv);
    return cvvCheck;
}

//Credit Card field Validation for number, zip code and cvv
    const $card = () => {
        if ($validCC()) {
         $('label[for="cc-num"]').css('color', '');
         $('#cc-num').css('border', '');
     } else {
         $('label[for="cc-num"]').css('color', 'red');
         $('#cc-num').css('border', '2px solid red');
     }
        if ($validZip()) {
         $('label[for="zip"]').css('color', '');
         $('#zip').css('border', '');
     } else {
         $('label[for="zip"]').css('color', 'red');
         $('#zip').css('border', '2px solid red');
     } 
       if ($validCVV()) {
         $('label[for="cvv"]').css('color', '');
         $('#cvv').css('border', '');
     } else {
         $('label[for="cvv"]').css('color', 'red');
         $('#cvv').css('border', '2px solid red');
    }
    }


//Credit card field event listener for number, zip code and cvv
$('#cc-num, #zip, #cvv').on('change', function () {
    $card();
});

//Credit card selected function to return boolean for master validation
const $payment = () => {
    const paymentVal = $('#payment :selected').text();
    if (paymentVal === '' || paymentVal === 'Credit Card') {
        if ($validCC() && $validZip() && $validCVV()) {
            return true;
        }
        return false;
    }
    return true;
}

//Page validation function
const $page = () => {
    if ($validName() && $validEmail() && $checked() > 0) {
        if ($('#payment :selected').val() === '') {
            return false;
         } else if ($('#payment :selected').val() === 'credit card') {
                if ($payment()) {
                    return true;
                }
                return false;
            }
            return true;
        }
    }


//Submit Button 
$('button').on('click', function (e) {
    if ($page()) {
    } else {
        e.preventDefault();
       $page();
        alert('Please fill out all fields.');
    }});
