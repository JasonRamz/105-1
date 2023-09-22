function login(){
    let email=$("#email").val();
    let password=$("#password").val();
    let userArray =readUsers();
    let flag;


    for(let i=0 ; i<userArray.length ; i++){
        let user = userArray[i];
        if(email===user.email && password===user.password){
            window.location="users.html";
            flag=true;
            break;
        }
        else{
            flag=false;
        }
    }
    if(flag==false){
        alert('Invalid Credentials');
    }
}

function init(){
    $("#btnLogin").click(login);
}

window.onload = init;