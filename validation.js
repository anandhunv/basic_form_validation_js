function validate(){
    //creating variables
    var username=document.getElementById("username");//method //put username id input value into username variable
    var email=document.getElementById("email");//method //put email id input value into email variable
    var password=document.getElementById("password");//method //put password id input value into password variable
    var cpassword=document.getElementById("cpassword");//method //put cpassword id input value into cpassword variable
    //if anyone didint miss the input field or didint enter the username
    if(username.value===""){
        alert("Please enter the username");
        //tofocus on that field
        document.form1.username.focus();
        return false;
    }

    if(email.value===""){
        alert("Please enter the email");
        //tofocus on that field
        document.form1.email.focus();
        return false;
    }

    if(password.value===""){
        alert("Please enter the password");
        //tofocus on that field
        document.form1.password.focus();
        return false;
    }

//to check password and confirm password
    if(cpassword.value==="" || cpassword.value!=password.value){
        alert("Please confirm password");
        //tofocus on that field
        document.form1.cpassword.focus();
        return false;
    }
    return true;  //if the above validation are false all fields are filled,its return true
     
}