    const KEY = "users";

function saveUser(user){
    let users=readUsers();
    users.push(user);//joining the new users with users list 
    let val = JSON.stringify(users);
    localStorage.setItem(KEY,val);
}

function readUsers(){
    let data = localStorage.getItem(KEY);
    if(!data){//not data
        return [];//creating an array
    }else{
        let userList=JSON.parse(data);
        return userList;
    }
}