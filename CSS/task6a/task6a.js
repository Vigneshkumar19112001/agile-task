let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstname = id("firstname"),
    lastname = id('lastname'),
    email = id('email'),
    phoneNumber  = id('phonenumber'),
    billingAddress = id('billingaddress'),
    yourAddress = id('youraddress'),
    city = id('city'),
    state = id('state'),
    zipCode = id('zipcode'),
    country = id('country'),
    form = id('form'),
    errorMsg = classes('error'),
    successMsg = classes('success-icon'),
    toprint= id('toprint'),
    failureMsg = classes('failure-icon');
    // console.log(toprint.innerHTML);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    // e.stopPropagation();
    engine(firstname, 0,"first name cannot be empty");
    engine(lastname, 1,"last name cannot be empty");
    engine(email, 2,"email cannot be empty");
    engine(phoneNumber, 3,"phone number cannot be empty");
    engine(billingAddress, 4,"provide billing adderess");
    engine(yourAddress, 5,"provide your address");
    engine(city, 6,"city cannot be empty");
    engine(state, 7,"state cannot be empty");
    engine(zipCode, 8,"zipcode cannot be empty");
    engine(country, 9,"country cannot be empty");
})

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        toprint.innerHTML = "failed";
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureMsg[serial].style.opacity = "1";
        successMsg[serial].style.opacity = "0";
    }else {
        toprint.innerHTML = "success"
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        failureMsg[serial].style.opacity = "0";
        successMsg[serial].style.opacity = "1";
    }
};

// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     if(form.value === ""){
//         e.preventDefault();
//         e.stopPropagation();
//         // console.log('failed');
//         toprint.innerHTML = "failed"
//     }else {
//         toprint.innerHTML = "success"
//     }
// })



    