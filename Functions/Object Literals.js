var greeting = {
    fullname: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
};


greet = (message)=> {
    console.log(message + " " + fullname + "!!");
}

getFullName: () => {
    return this.fullname;
}

greet: (message) => {
    console.log(message + " " + this.getFullName() + "!!");
}

(message, name) => {
    var customMessage = message + " " + name +
        "!!! It's nice to meet you."
    console.log(customMessage);
}

var anotherGreeting = greeting;

var copiedGreeting = greeting;
copiedGreeting.fullname = "Michael Buble";
console.log(greeting.fullname + " == " + copiedGreeting.fullname);

delete greeting["fullname"];
greeting.firstname = "Michael";
greeting.lastname = "Jackson";
