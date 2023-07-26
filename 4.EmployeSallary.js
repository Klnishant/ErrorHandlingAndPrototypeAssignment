class employee{
    constructor(name,position,sallary){
        this.name=name;
        this.position=position;
        this.sallary=sallary;
    }
    getSallary(){
        return this.sallary
    }
}

const employee1= new employee("Anurag","Senior Developer","80000");
console.log(employee1.getSallary());