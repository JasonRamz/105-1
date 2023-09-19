function User(e,p,f,l,a,g101,g102,g103){
    this.email=e;
    this.password=p;
    this.firstName=f;
    this.lastName=l;
    this.age=a;
    this.g1=g101;
    this.g2=g102;
    this.g3=g103;
};
//validation
function isValid(User){
    let validation=true;
    inputEmail.classList.remove("alert-error");
    inputPassword.classList.remove("alert-error");
    inputFirstName.classList.remove("alert-error");
    inputLastName.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputG101.classList.remove("alert-error");
    inputG102.classList.remove("alert-error");
    inputG103.classList.remove("alert-error");


    return validation;
}

function register(){
    let inputEmail=$(`#txtEmail`).val();
    let inputPassword=$(`#txtPassword`).val();
    let inputFirstName=$(`#txtFirstName`).val();
    let inputLastName=$(`#txtLastName`).val();
    let inputAge=$(`#txtAge`).val();
    let inputG101=$(`#txtG101`).val();
    let inputG102=$(`#txtG102`).val();
    let inputG103=$(`#txtG103`).val();
    console.log("Registering...");
    let user = new User(inputEmail,inputPassword,inputFirstName,inputLastName,inputAge,inputG101,inputG102,inputG103);
    console.log(user);
}

function init(){
    $(`#btn-Register`).click(register);
}

window.onload = init;