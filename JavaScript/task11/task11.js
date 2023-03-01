let form = document.querySelector(".needs-validation"); 
let result = document.querySelector(".modal-body");

form.addEventListener('submit', (event) => {
    if(!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        result.innerHTML = "Failed";
        result.style.backgroundColor = "red";
    }
    else {
        event.preventDefault();
        result.innerHTML = "Success";
        result.style.backgroundColor = "green"
    }
form.classList.add('was-validated');

});