const student={
    name:"",

    printDetails(){
        console.log(`Hello,my name is ${this.name}`);
    }
}

const student1=Object.create(student);
student1.name="Mithun";

student1.printDetails();