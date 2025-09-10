/* Javascript Function */

{
    function greet(name){
        console.log("Hello" + name);
    }
    greet("javascript")
}

// Javascript Function Calculation

{
    function calc(a , b){
        return a + b;
    }
   let result =  calc(10 , 20);
    console.log(result);
}

{
    function calc(a , b){
        return a / b;
    }
   let result =  calc(100 , 50);
    console.log(result);   
}

{
    let calc = (a , b) => {
      return a  + b
    } 
    console.log(calc(10 , 20));    
  }
  
  {
    let print = name => {console.log(name)}
  
    print("Javascript")
  }
  
  {
    let print = name => console.log(name)   // -> Curly braces are not use than also function call.
    print("HTML")   
  }