// $("contact-form").submit(function (e) {
//     var firstName  = document.getElementById("inputFirstName"),
//         lastName = document.getElementById("inputLastName"),
//         email = document.getElementById("inputEmail"),
//         message = document.getElementById("message"),
//         pnoneNumber = document.getElementById("inputPhoneNumber"),
//         city = document.getElementById("inputCity"),
//         company = document.getElementById("inputCompany");

//     if(!name.value || !firstName.value || !lastName.value || !email.value || !phoneNumber.value || !company.value || !city.value || !message.value) {
//         alertify("please check your entries")
//     }

//     else{
//         $.ajax({
//             url: "https://formspree.io/cliffnyendwe2018@gmail.com",
//             method: "POST",
//             data: $(this).serialize(),
//             dataType: "json"
//           });
//         e.preventDefault()
//         $(this).get(0).reset()
//         alertify.success("Message sent successfully")
//     }

// }
// )
(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);