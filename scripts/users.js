function displayUsers(userArray){
    let tr="";
    for(var i = 0; i < userArray.length; i++) {
        
        let gpa =0;
        let user = userArray[i];
        gpa =(Number(user.g101) + Number(user.g102) + Number(user.g103))/3;

        tr=`
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.g101}</td>
            <td>${user.g102}</td>
            <td>${user.g103}</td>
            <td style="color:${SAP(gpa)};${gpa.toFixed()}</td>
        </tr>
        `;
        
    }
    $("#usersTable").append(tr);
}
function SAP(gpa){
    let colorCode="";
    if(gpa>=95){
        colorCode="green";
    }else if(gpa<=85){
        colorCode="red";
    }return colorCode;
}

function init(){
    let users = readUsers();
    displayUsers(users);
    console.log(users);
}

window.onload = init;