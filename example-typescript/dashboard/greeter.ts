import { temp } from "./temp"; 

function greeter(person:string) {
    temp('bing bong');
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user);