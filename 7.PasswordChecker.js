class User{
    constructor(Username,password){
        this.Username=Username;
        this.password=password;
    }

    getpassword(){
        return this.password.replace(/./g,'*');
    }

    setpassword(newpassword){
        if(newpassword.length>=8 && /\d/.test(newpassword) && /[A-Z]/.test(newpassword)){
            this.password=newpassword;
        }
        else{
            console.error("Invalid password. The password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const user=new User("Mithun","Password123");
console.log(user.getpassword());

user.setpassword("mypassword")
user.setpassword("Mypassword123")
console.log(user.getpassword());