class car{
    constructor(company,model,year){
        this.company=company;
        this.model=model;
        this.year=year;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

const myCar=new car("tyota","camary",2022);
console.log(myCar.getDescription());

