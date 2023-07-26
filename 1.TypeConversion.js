function typeConversion(str){
    try{
        const number=Number(str);
        if(Number.isNaN(number)){
            throw new Error("Invalid Number")
        }
        return number;
    }
    catch(error){
        return "Invalid Number";
    }
}

console.log(typeConversion("123"));
console.log(typeConversion("13.4"));
console.log(typeConversion("abc"));