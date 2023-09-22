function User(email, password,fname,lname,age,g1,g2,g3){
    this.email = email;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.g1 = g1;
    this.g2 = g2;
    this.g3 = g3;
}
function isValid(aUser){
    let validation=true;
    inputEmail.classList.remove("alert-error");
    inputPass.classList.remove("alert-error");
    inputFname.classList.remove("alert-error");
    inputLname.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    input101.classList.remove("alert-error");
    input102.classList.remove("alert-error");
    input103.classList.remove("alert-error");


    if(aUser.email==""){
        validation=false;
        inputEmail.classList.add("alert-error");
    }
    if(aUser.password==""){
        validation=false;
        inputPass.classList.add("alert-error");
    }
    if(aUser.fName==""){
        validation=false;
        inputFname.classList.add("alert-error");
    }
    if(aUser.lName==""){
        validation=false;
        inputLname.classList.add("alert-error");
    }
    if(aUser.age==""){
        validation=false;
        inputAge.classList.add("alert-error");
    }
    if(aUser.g101==""){
        validation=false;
        input101.classList.add("alert-error");
    }
    if(aUser.g102==""){
        validation=false;
        input102.classList.add("alert-error");
    }
    if(aUser.g103==""){
        validation=false;
        input103.classList.add("alert-error");
    }
    return validation;
}

function register(){
    //getting the values from the inputs
    let inputEmail=$(`#txtEmail`).val();
    let inputPass=$(`#txtPass`).val();
    let inputFname=$(`#txtFname`).val();
    let inputLname=$(`#txtLname`).val();
    let inputAge=$(`#txtAge`).val();
    let input101=$(`#txt101`).val();
    let input102=$(`#txt102`).val();
    let input103=$(`#txt103`).val();
    //creating new user
    let user= new User(inputEmail,inputPass,inputFname,inputLname,inputAge,input101,input102,input103);
    //display on console
    saveUser(user);
}

function init(){
    $(`#registerBtn`).click(register);
}
window.onload = init;