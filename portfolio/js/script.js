$("contact-form").submit(function (e) {
    var firstName  = document.getElementById("inputFirstName"),
        lastName = document.getElementById("inputLastName"),
        email = document.getElementById("inputEmail"),
        message = document.getElementById("message"),
        pnoneNumber = document.getElementById("inputPhoneNumber"),
        city = document.getElementById("inputCity"),
        company = document.getElementById("inputCompany");

    if(!name.value || !firstName.value || !lastName.value || !email.value || !phoneNumber.value || !company.value || !city.value || !message.value) {
        alertify("please check your entries")
    }

    else{
        $.ajax({
            url: "https://formspree.io/cliffnyendwe2018@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
          });
        e.preventDefault()
        $(this).get(0).reset()
        alertify.success("Message sent successfully")
    }

}
)