function myFunction() {
    var show = document.getElementById("Showpassword");
    if(show.type== "password"){
        show.type="text";
    }else{
        show.type="password";
    }
}