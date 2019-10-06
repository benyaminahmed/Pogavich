$(window).on('load',function(){
    $('#exampleModal').modal('show');
});

const pwd = "ptpp";
const wrongPassword = document.getElementById('wrongPassword');
wrongPassword.style.display = "none";

function onSubmit() {
    const password = document.getElementById('password').value;
    if(password === pwd) {
     window.location.href = "./index.html";
    }
    else {
        wrongPassword.style.display = "";
    }
}