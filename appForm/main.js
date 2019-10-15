// document.querySelector("#contactForm").addEventListener("submit", submitForm);

// function submitForm(e) {
//     e.preventDefault();

// var name = setInputVal('name');
// var company = setInputVal('company');
// var email = setInputVal('email');
// var tel = setInputVal('tel');
// var message = setInputVal('message');

// }

// function getInputVal(id) {
//     return document.querySelector('#' + id).value;
// }

$.get("http://jsonplaceholder.typicode.com/users", function (data) {
    document.querySelector("#name").value = data[0].name;
    document.querySelector("#company").value = data[0].company.name;
    document.querySelector("#email").value = data[0].email;
    document.querySelector("#tel").value = data[0].phone;
    document.querySelector("#message").value = data[0].username;
});


