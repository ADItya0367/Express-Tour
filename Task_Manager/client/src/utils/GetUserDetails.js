

export function getUserDetails(){
    let user = localStorage.getItem('ToDoUser');
    if(user){
        return JSON.parse(user);
    }
    return user;
     
}