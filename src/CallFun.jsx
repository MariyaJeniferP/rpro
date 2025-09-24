function Greet(name, Callback){
    console.log("Hello" + name);
    Callback();
}

function sayBye(){
    console.log("Goodbye!");
}

Greet("jeni", sayBye);

export default Greet