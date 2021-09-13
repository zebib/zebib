//Cosider the following object factory function called Emploeyee
Employee=function(){
    theEmp={
    
            name:"",// public field
            salary : 0 //public field
        };
        getSalary=function(){ //Private method
        return theEmp.salary;

        }
        setSalary=function(aSalary){ //private method
       theEmp.salary=aSalary;

        }
        theEmp.giveRaise=function(amount){ //public method
       setSalary(getSalary+amount);
    
        }
         //insert the statements here to make give raise salary
    theEmp.giveRaise=function(raise){//Ans
           theEmp.salary=getSalary() + raise;
         return theEmp.salary;
    }
       //Ans
       return theEmp;
    
};
aEmp= Employee();
aEmp.name="George Smith";
aEmp.salary=15000;
//aEmp.setSalary(234568);
console.log(aEmp.giveRaise(1000));

/*
To make this Object Factory work correctly, 
one additional javaScript is needed right 
before the return to make the giveRaise method public, as 
indicated by the comment shown above.your job is to write
this one statment. Write your answer on the answer sheet.
*/
