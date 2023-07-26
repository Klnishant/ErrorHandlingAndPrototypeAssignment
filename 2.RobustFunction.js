function getPerson(object){
    try{
        if(typeof object!="object"||object==null||!("name" in object)||!("age" in object)){
            throw new Error("Invalid Parameter Type");
        }

        const {name,age}=object;
        return `Name:${name},Age:${age}`;
    }
    catch(error){
        return "Invalid Parameter Type";
    }

}

console.log(getPerson({name:"Mithun",age:20}));
console.log(getPerson({name:"Mithun"}));
console.log(getPerson(["name","Mithun"]));