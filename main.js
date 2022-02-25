function create() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let password2 = document.getElementById("password2").value;
    let correct="Your account has been created successfully!";
    let error="Please write on each box";
    let passW="Passwords aren't matching";
    if (username==="" || password==="" || password2===""){
        document.getElementById("demo").innerHTML = error;
    }
    else if (password2 != password){
        document.getElementById("demo").innerHTML = passW;
    }
    else{
        document.getElementById("demo").innerHTML = correct;
    }
}
function hide1() {
    let x = document.getElementById("password2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function hide() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }}
$( "p" ).click(function() {
    $( this ).slideUp();
});
$('.hah').on("keypress", function(e) {
    if (e.keyCode == 13) {
        create();
    }
});
